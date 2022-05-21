// jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(req,res){
	res.sendFile(__dirname + '/index.html')
})

app.post('/',function(req,res){
	
	let num1 = Number(req.body.num1);
	let num2 = Number(req.body.num2);

	let result = num1 + num2;

	res.send('Final calculation is: '+ result);
})

app.get('/BmiCalc',function(req,res){
	res.sendFile(__dirname + '/BmiCalc.html')
})

app.post('/BmiCalc',function(req,res){
	let weight = parseFloat(req.body.weight);
	let height = parseFloat(req.body.height)

	let bmi = weight / (height * height);

	res.send('Final BMI calculation is: ' + bmi);
})

app.listen(2000,'127.0.0.1');