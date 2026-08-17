//#region src/images/spa-salon.jpg
var spa_salon_default = new Proxy({
	"src": "/_astro/spa-salon.mTLcLsoH.jpg",
	"width": 1600,
	"height": 1067,
	"format": "webp"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/images/spa-salon.jpg";
	return target[name];
} });
//#endregion
export { spa_salon_default as default };
