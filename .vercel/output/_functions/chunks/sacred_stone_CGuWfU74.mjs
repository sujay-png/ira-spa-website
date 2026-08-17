//#region src/images/sacred stone.jpg
var sacred_stone_default = new Proxy({
	"src": "/_astro/sacred stone.7Mslfi3V.jpg",
	"width": 5184,
	"height": 3456,
	"format": "jpg",
	"orientation": 1
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/images/sacred stone.jpg";
	return target[name];
} });
//#endregion
export { sacred_stone_default as default };
