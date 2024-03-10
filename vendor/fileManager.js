let ROUTE = "";
const HEAD = document.getElementsByTagName('head')[0];

/**
 *
 * @returns {Promise<void>}
 */
const importScriptFile = async () => {
    await fetch("/SPA_js/config/system.json")
        .then((response) => response.json())
        .then(files => {

            generateImport(files);
            generateScriptTag("index", HEAD);
        })
        .catch((error) => console.error("Error loading JSON file", error));
};

/**
 *
 * @param files
 */
const generateImport = (files) => {
    for (const file in files) {
        if (typeof files[file] === "object") {
            if (files[file].length !== undefined) {
                files[file].forEach(f => generateScriptTag(ROUTE + file + "/" + f));
            } else {
                ROUTE += file + "/";
                generateImport(files[file]);
            }
        } else {
            generateScriptTag(files[file]);
        }
    }
};

/**
 *
 * @param src
 */
const generateScriptTag = (src) => {
    const scriptTag = document.createElement('script');
    scriptTag.type = "text/javascript";
    scriptTag.src = src + ".js";
    HEAD.appendChild(scriptTag);
};

importScriptFile().then();