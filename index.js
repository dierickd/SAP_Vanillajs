window.addEventListener("load", function()
{
    const appContainer = document.getElementById('app');

    render(appContainer);

    document.addEventListener('click', function (event) {
        if (event.target.tagName === 'A' && event.target.origin === window.location.origin) {
            event.preventDefault();
            history.pushState(null, null, event.target.href);
            render(appContainer);
        }
    });

});