const articlesView = () => {
    const element = document.createElement('div');
    element.innerHTML = '<h1>Liste des articles</h1>' +
        '<ul>\n' +
        '    <li><a href="' + BASE_URI + 'article/12">Article 12</a></li>\n' +
        '    <li><a href="' + BASE_URI + 'article/15">Article 15</a></li>\n' +
        '    <li><a href="' + BASE_URI + 'article/26">Article 26</a></li>\n' +
        '</ul>' +
        '<a href="' + BASE_URI + '">Retour à la page d\'accueil</a>';
    return element;
};