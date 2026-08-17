//#region src/images/spa.png
var spa_default = new Proxy({
	"src": "/_astro/spa.CvM8QZgb.png",
	"width": 1140,
	"height": 694,
	"format": "webp"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/images/spa.png";
	return target[name];
} });
//#endregion
export { spa_default as default };
