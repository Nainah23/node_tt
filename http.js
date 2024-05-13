const http = require('http');

const myServer = http.createServer((req, res) => {
	if (req.url === '/')
		res.end('Umenipata bas');
	if (req.url === '/about')
		res.end('Apa ndo nakushow ma-one-two kunihusu');
	res.end(`
	<h1>WOLOLO,</h1>
	<p> Hii ni NGOOORI KURUKA</p>
	<a href='/'>rudi tu mtaani apa</a>`);
})

myServer.listen(8080);
