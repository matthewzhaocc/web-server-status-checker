let ping = require('ping')
let express = require("express")
let app = express()
let port = 8000
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.post('/api/v1/ping/status', (req,res) => {
	let ip = req.body.ip
	ping.sys.probe(ip, (isAlive) => {
		res.send(isAlive)
	})
})
app.listen(port, () => console.log(`running pingifuker on port ${port}`))

