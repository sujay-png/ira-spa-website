//#region src/images/spa-reception.jpg
var spa_reception_default = new Proxy({
	"src": "/_astro/spa-reception.BNcjwSsT.jpg",
	"width": 3456,
	"height": 5184,
	"format": "jpg",
	"orientation": 1
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/images/spa-reception.jpg";
	return target[name];
} });
//#endregion
export { spa_reception_default as default };
