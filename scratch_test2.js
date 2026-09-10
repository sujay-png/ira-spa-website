import * as https from 'https';

https.get('https://dashboard.iraspa.in/book-an-appointment', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        // Regex to extract all fields
        const regex = /name="form_fields\[(.*?)\]"/gi;
        let match;
        const fields = new Set();
        while ((match = regex.exec(data)) !== null) {
            fields.add(match[1]);
        }
        console.log("Fields found:", Array.from(fields));
    });
}).on('error', err => console.error(err));
