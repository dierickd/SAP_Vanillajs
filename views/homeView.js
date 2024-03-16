const homeView = (params) => {
    const element = document.createElement('div');
    element.innerHTML = '<h1>Home</h1><p>Welcome to the home page!</p>' +
        '<ul>' +
        '<li><a href=' + Route.getRoute("article") + '>Liste des articles</a></li>' +
        '<li><a href=' + Route.getRoute("article_detail", { id: 12 }) + '>Accueil</a></li>' +
        '</ul>';
    return element;
};