const notFoundView = () => {
    const element = document.createElement('div');
    element.innerHTML = '<h1>404 Not Found</h1><p>Sorry, the page you are looking for does not exist.</p>' +
        '<a href="' + BASE_URI + 'about">About</a>';
    return element;
}