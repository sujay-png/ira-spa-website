//#region src/images/serviceimg2.jpg
var serviceimg2_default = new Proxy({
	"src": "/_astro/serviceimg2.Dlcmw2ot.jpg",
	"width": 1024,
	"height": 683,
	"format": "webp"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/images/serviceimg2.jpg";
	return target[name];
} });
//#endregion
export { serviceimg2_default as default };
