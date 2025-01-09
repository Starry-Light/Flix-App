const global = {
    currentPage: window.location.pathname,
}
;

//highlight active link
function highlightActiveLink() {
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        if (link.getAttribute('href') === global.currentPage) {
            link.classList.add('active');
        }
    })
}








// init app
function init() {
    switch (global.currentPage) {
        case '/':
        case '/index.html':
            console.log('HOme');
            break
        case '/shows.html':
            console.log('shows');
            break;
        case '/movie-details.html':
            console.log('mvie details');
            break;
        case '/tv-details.html':
            console.log('tv details');
            break;
        case '/search.html':
            console.log('Search');
            break;
    }

    highlightActiveLink()
}



document.addEventListener("DOMContentLoaded", init)