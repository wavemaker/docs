"use strict";

require('dotenv').config();

const siteVariables = {
  wmVersionNumber: process.env.WM_VERSION_NUMBER
};

/**
 * Plugin for Remarkable Markdown processor which transforms $$..$$ content and replace its variables
 * Reference - https://github.com/bradhowes/remarkable-katex
 */
module.exports = function(md) {

    /**
     * Look for '$$' spans in Markdown text. Based off of the 'fenced' parser in remarkable.
     */
    function parseInlineContent(state, silent) {
        var dollar = 0x24;
        var pos = state.pos;
        var start = pos, max = state.posMax, marker, matchStart, matchEnd ;

        if (state.src.charCodeAt(pos) !== dollar) { return false; }
        ++pos;

        while (pos < max && state.src.charCodeAt(pos) === dollar) {
            ++pos;
        }

        marker = state.src.slice(start, pos);
        if (marker.length !== 2) { return false; }

        matchStart = matchEnd = pos;
        
        while ((matchStart = state.src.indexOf('$', matchEnd)) !== -1) {
            matchEnd = matchStart + 1;
            
            while (matchEnd < max && state.src.charCodeAt(matchEnd) === dollar) {
                ++matchEnd;
            }
            
            if (matchEnd - matchStart == marker.length) {
                if (!silent) {
                    var content = state.src.slice(pos, matchStart)
                                           .replace(/[ \n]+/g, ' ')
                                           .trim();

                    state.push({
                        type: 'variableInjection',
                        content: content,
                        block: false,
                        level: state.level
                    });
                }

                state.pos = matchEnd;
                return true;
            }
        }

        if (! silent) state.pending += marker;
        state.pos += marker.length;

        return true;
    }

    md.inline.ruler.push('variableInjection', parseInlineContent);
    md.renderer.rules.variableInjection = function(tokens, idx) {
        /**
         * Parses the content to extract variables property and iterates through all the 
         * valiables replacing one by one and parsed again
         */
        let regex;
        let parsedContent = JSON.parse(tokens[idx].content);

        parsedContent.variables.forEach(function(item, index){
            regex = new RegExp('#{'+ item +'}#', "g");
            tokens[idx].content = tokens[idx].content.replace(regex, siteVariables[item]);
        });

        parsedContent = JSON.parse(tokens[idx].content);

        /**
         * Based on the type of the content repective HTML is built and returned to markdown
         */
        switch (parsedContent.type) {
            case 'anchor':
                return '<a href="'+ parsedContent.url +'">'+ parsedContent.name +'</a>';
        }
    };
};
