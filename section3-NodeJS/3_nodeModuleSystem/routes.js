const fs = require('fs');
const { log } = require('./toolkit');


function requestHandler(req, res) {
    const url = req.url;
    const method = req.method;
    // ---routing---
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            // you can see the content of the chunk
            // which has hexadecimal data in it
            log('receiving the data...')
            body.push(chunk); // append the data to memory
        });
        req.on('end', () => {
            log('The data receiving is done!')
            const parsedBody = Buffer.concat(body).toString(); // message=hello+max
            log(`Parsed body: ${parsedBody}`);
            const message = parsedBody.split('=')[1]; // hello+max
            log(`Message: ${message}`);

            // write the message to file
            fs.writeFile('message.txt', message, err => {
                // this callback function will be triggered
                // after writing process is done

                // error printing:
                // I don't know is it working w/o toString()
                log(`Any error? : ${err ?? 'No error.'}`);

                log('File has been written to the disk.');
                res.statusCode = 302; // tells I'm redirecting you to a page
                res.setHeader('Location', '/'); // redirect to main page of server
                log('Routing you to the main page...');
                return res.end(); // I'm done with the package
            });

        });
    }
    else if (url === '/') {
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
        res.setHeader('Content-type', 'text/html');
        res.write(enterMessageHtml);
        log('Welcome to the main page!');
        return res.end();
    }
}

module.exports = {
    handler: requestHandler,
    aTex: "asdkfjsdl"
};

// alternative usage:
// exports.handler = requestHandler;
// exports.aTex = "lsdkfsdlfkj";
// this usage (w/o module.) only for multi line typing
// you can't do this >>>
// exports = {
//     handler: requestHandler,
//     aTex: "asdkfjsdl"
// };