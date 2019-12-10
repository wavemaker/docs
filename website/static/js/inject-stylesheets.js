/**
 * The Event gets executed when the DOM page gets fully loaded and then it creates 
 * and appends the provided CSS file as a child to the page head
 */
document.addEventListener("DOMContentLoaded", function(){
    let head = document.getElementsByTagName('HEAD')[0];
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = '/learn/assets/wavemaker.css?'+ new Date().valueOf();
    head.appendChild(link);
});