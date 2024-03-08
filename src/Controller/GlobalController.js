class GlobalController {

    constructor() {
    }

    checkModel = (model) => {
        if (typeof window[model] === "function") {
            return true;
        } else {
            throwError({
                "message": `Le model <span class="highlight">${model}</span> n'exsite pas ou n'a pas été trouvé`,
                "info": "<i>" + getErrorFileInfo() + ":" + getCurrentLineNumber() + "</i>"
            });
        }
    };
}