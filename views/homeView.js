const homeView = () => {
    const element = document.createElement('div');
    element.innerHTML = '<h1>Home</h1><p>Welcome to the home page!</p>' +
        '<ul>' +
            '<li><a href="' + BASE_URI + 'articles/mon-premier-article">Générer une erreur</a></li>' +
            '<li><a href="' + BASE_URI + 'article">Liste des articles</a></li>' +
        '</ul>';
    return element;
};