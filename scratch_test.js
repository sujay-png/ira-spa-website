async function testLocalApi() {
    try {
        const res = await fetch("http://localhost:4321/api/book", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: "Test",
                phone: "+91 99999 99999",
                service: "massage",
                location: "mangalore",
                date: "2026-09-10",
                time: "10:00"
            })
        });
        const text = await res.text();
        console.log("Status:", res.status);
        console.log("Response:", text);
    } catch(e) {
        console.error("Fetch error:", e);
    }
}
testLocalApi();
