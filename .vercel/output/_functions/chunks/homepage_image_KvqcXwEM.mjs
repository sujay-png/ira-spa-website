//#region src/images/homepage_image.jpg
var homepage_image_default = new Proxy({
	"src": "/_astro/homepage_image.DfWVIEEx.jpg",
	"width": 679,
	"height": 452,
	"format": "jpg"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/images/homepage_image.jpg";
	return target[name];
} });
//#endregion
export { homepage_image_default as default };
