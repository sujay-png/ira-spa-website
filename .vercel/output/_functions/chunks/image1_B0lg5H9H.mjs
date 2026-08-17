//#region src/images/image1.jpg
var image1_default = new Proxy({
	"src": "/_astro/image1.qCHxceKL.jpg",
	"width": 1024,
	"height": 683,
	"format": "webp"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/images/image1.jpg";
	return target[name];
} });
//#endregion
export { image1_default as default };
