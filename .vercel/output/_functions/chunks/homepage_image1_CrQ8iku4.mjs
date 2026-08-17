//#region src/images/homepage_image1.jpg
var homepage_image1_default = new Proxy({
	"src": "/_astro/homepage_image1.BI2GwP_Q.jpg",
	"width": 626,
	"height": 417,
	"format": "jpg"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/images/homepage_image1.jpg";
	return target[name];
} });
//#endregion
export { homepage_image1_default as default };
