//#region src/images/spa-treatment.jpg
var spa_treatment_default = new Proxy({
	"src": "/_astro/spa-treatment.DvXUCudl.jpg",
	"width": 3500,
	"height": 2336,
	"format": "jpg",
	"orientation": 1
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/images/spa-treatment.jpg";
	return target[name];
} });
//#endregion
export { spa_treatment_default as default };
