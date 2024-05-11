// ---LIBRARIES---
const http = require('http');
const fs = require('fs');
// ---------------

const server = http.createServer(rqListener);

const indexHtml = `
    <html>
    <head><title>My LEGGGGGENDARY first p4g3!</title></head>
    <body>
    Hello <h1>Ferhat!!!</h1>
    </body>
    </html>
    `;

const enterMessageHtml = `
    <html>
    <head><title>Enter the message</title></head>
        <body>
            <form action="/message" method="POST">
                <input type="text" name="message"><button type="submit">Send it!</button>
            </form>
        </body>
    </html>
`;

function rqListener(req, res) {
    const url = req.url;
    const method = req.method;
    if (url === '/'){ // if it is string and also '/'
        console.log("Page >> index.html")
        res.setHeader("Content-type", "text/html");
        res.write(enterMessageHtml);
        return res.end; // using return to end this function
    }
    else if (url === '/message' && method === 'POST'){
        fs.writeFileSync('./message.txt', 'DUMMY MESSAGE');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }

}




server.listen(1301);