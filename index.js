const appContainer = document.getElementById('app');

render(appContainer);
// try {
//     render(appContainer);
// } catch (e) {
//     window.location.reload();
// }

document.addEventListener('click', function (event) {
    if (event.target.tagName === 'A' && event.target.origin === window.location.origin) {
        event.preventDefault();
        history.pushState(null, null, event.target.href);
        render(appContainer);
    }
});
