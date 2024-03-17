const articlesView = (params) => {
    const element = document.createElement('div');
    const h1 = document.createElement("h1");
    const back = document.createElement("a");
    h1.innerHTML = "Liste des articles";
    element.appendChild(h1);
    back.href = BASE_URI;
    back.style.color = "rgba(0,0,0,0.5)";
    back.style.fontSize = "14px";
    back.innerHTML = "Retour à l'accueil";
    element.appendChild(back);

    for (let i = 0; i < params.articles.length; i++) {
        const h3 = document.createElement("h3");
        const link = document.createElement("a");
        const p = document.createElement("p");

        link.href = Route.getRoute("article_detail", { id: params.articles[i].id });
        link.innerHTML = params.articles[i].title;
        h3.appendChild(link);

        p.innerHTML = params.articles[i].content;

        element.appendChild(h3);
        element.appendChild(p);
    }
    return element;
};