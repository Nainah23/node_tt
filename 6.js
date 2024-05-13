const os = require('os');

const me = os.userInfo();
console.log(me);
console.log(`Machine yako imekua on for ${os.uptime()}`);

const mee = {
	name: os.type(),
	release: os.release(),
	totalMem: os.totalmem(),
	freeMem: os.freemem()
}
console.log(mee);
