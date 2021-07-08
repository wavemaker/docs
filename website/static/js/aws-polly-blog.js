const AWS = require('aws-sdk');

var remark = require('remark');
var strip = require('strip-markdown');

const fs = require('fs');
const path = require('path');

let ttsSettings = JSON.parse(fs.readFileSync(path.join(__dirname + '/aws-polly-blog-config.json')));
let blogsDir = path.join(__dirname + './../../blog/');

const PollyClient = new AWS.Polly({
    signatureVersion: 'v4',
    region: 'us-east-1'
});

let pollyConfig = {
    'TextType': ttsSettings.config.textType,
    'OutputFormat': ttsSettings.config.outputFormat,
    'VoiceId': ttsSettings.config.voiceId
};

function tts(text, blogName) {
    pollyConfig['Text'] = text;
    PollyClient.synthesizeSpeech(pollyConfig, (err, data) => {
        if (err) {
            console.log(err.code)
        } else if (data) {
            if (data.AudioStream instanceof Buffer) {
                fs.writeFile(ttsSettings.outputPath + "/" + blogName + ".mp3", data.AudioStream, function (err) {
                    if (err) {
                        return console.log(err)
                    }
                    console.log("The file was saved!")
                })
            }
        }
    });
}

function readBlogs() {
    createOutputDir();
    ttsSettings.files.forEach(function (blog) {
        console.log("----------------" + blog + "-------------------");
        fs.readFile(path.join(blogsDir, blog), 'utf8', function (error, data) {
            remark()
                .use(strip)
                .process(data, function (err, file) {
                    if (err) throw err;
                    let text = String(file);
                    text = '<speak>' + text + '</speak>';
                    text = text.replace(/\n/ig, '<break time="300ms"/>').replace(/'/g, '');
                    tts(text, blog)
                });
        })
    });
}

function createOutputDir() {
    if (!fs.existsSync(ttsSettings.outputPath)) {
        fs.mkdirSync(ttsSettings.outputPath);
    }
}

readBlogs();