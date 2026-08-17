//#region src/images/tea.jpg
var tea_default = new Proxy({
	"src": "/_astro/tea.Df4wIFgo.jpg",
	"width": 3655,
	"height": 5501,
	"format": "jpg",
	"orientation": 1
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/images/tea.jpg";
	return target[name];
} });
//#endregion
export { tea_default as default };
