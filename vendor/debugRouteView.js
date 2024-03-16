const debugRouteView = (params) => {
    const element = document.createElement('div');
    const h1 = document.createElement('h1');
    const container = document.createElement('div');

    element.classList.add('err-page');
    container.classList.add("err-container");
    h1.innerHTML = params.message;
    h1.classList.add("err-header");

    // const p = document.createElement("p");
    // p.innerHTML = params.message;
    // container.appendChild(p);

    const info = document.createElement("p");
    info.innerHTML = params.info;
    container.appendChild(info);

    const a = document.createElement('a');
    a.innerHTML = '<a href="' + BASE_URI + '">Retour à la page d\'accueil</a>';

    element.appendChild(h1);
    element.appendChild(container);
    element.appendChild(a);

    return element;
};