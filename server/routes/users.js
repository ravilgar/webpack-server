const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.json());

router.use(bodyParser.urlencoded({
	extended: false
}));

router.route('/users').post((req, res) => {
	console.log(req.body);
	let userArr = [
	{
		name: "name1",
		age: 21
	},{
		name: "name2",
		id: 12
	}];

	userArr.push(req.body);
	res.send(userArr);
})

const app = express();


module.exports = router;