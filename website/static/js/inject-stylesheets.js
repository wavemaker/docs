/**
 * The Event gets executed when the DOM page gets fully loaded and then it creates 
 * and appends the provided CSS file as a child to the page head and inject mobileview
 * HTML and add click event
 */
document.addEventListener('DOMContentLoaded', function () {
    /* Create a link node and append it to the Head Tag */
    let head = document.getElementsByTagName('HEAD')[0];
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = '/learn/assets/wavemaker.css?' + new Date().valueOf();
    head.appendChild(link);

    /* Create and Parse a HTML string that to be injected into the header */
    let dropdown_element = new DOMParser().parseFromString(`<li class="dropdown">
        <a href="#" role="button" id="dropdown">Docs</a>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="/learn/documentation-reference" target="_self">Docs</a>
            <a class="dropdown-item" href="/learn/app-development/widgets/widget-library" target="_self">Widgets</a>
            <a class="dropdown-item" href="/learn/howtos-documents" target="_self">How-to</a>
            <a class="dropdown-item" href="/learn/wavemaker-release-notes" target="_self">Releases</a>
            <a class="dropdown-item" href="https://www.wavemakeronline.com/login/login" target="_blank">Login</a>
            <a class="dropdown-item" href="https://www.wavemaker.com/get-started/" target="_blank">Start free trial</a>
        </div>
    </li>`, 'text/html').body.firstChild;
    
    let host_element = document.querySelector('ul.nav-site.nav-site-internal');

    /* Append the HTML as first child into the unordered list */
    host_element.insertBefore(dropdown_element, host_element.childNodes[0]);

    /* Add click event to the element to toggle the dropdown options */
    host_element.childNodes[0].addEventListener('click', function(e){
        e.stopPropagation();
        let dropdown_container = document.querySelector('.dropdown .dropdown-menu');
        if(e.target.attributes.id && e.target.attributes.id.value === 'dropdown'){
            if(window.getComputedStyle(dropdown_container, null).getPropertyValue('display') === 'none'){
                dropdown_container.style.display = 'block';
            }else{
                dropdown_container.style.display = 'none';
            }
        }else{
            dropdown_container.style.display = 'none';
        }
    });

    /* Add click event to the document to hide the dropdown when clicked outside of it */
    document.addEventListener('click', function(e){
        document.querySelector('.dropdown .dropdown-menu').style.display = 'none';
    })
});
