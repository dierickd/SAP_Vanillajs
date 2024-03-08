const aboutView = () => {
    const element = document.createElement('div');
    element.innerHTML = '<h1>About</h1><p>Learn more about our SPA.</p><a href="' + BASE_URI + '">Home page</a>';
    return element;
};