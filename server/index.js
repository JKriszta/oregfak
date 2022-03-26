const mysql = require('mysql');
const configDb = require('./configDb');
const db = mysql.createConnection(configDb);
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/stats', (req,res) => {
	db.query(`SELECT
		faj, id, count(*) darab
		FROM
		fa
		group by
		faj
		order by
		darab
		desc
	`, (err,results)=>{
		if(err)
			console.log(err);
		else
			res.status(200).send(results)
	})
})

app.get('/megyek/', (req,res) => {
	db.query(`SELECT m.id, m.nev from megyek m`, (err,results)=>{
		if(err)
			console.log(err);
		else
			res.status(200).send(results)
	})
})

app.get('/megyek/:megyeid', (req,res) => {
	const megyeid=req.params.megyeid;
	db.query(`SELECT f.id, f.faj, f.kormeret, f.telepules, m.nev from fa f, megyek m where f.megyeid=m.id and m.id=${megyeid}
	`, (err,results)=>{
		if(err)
			console.log(err);
		else
			res.status(200).send(results)
	})
})

app.listen(5000,()=>console.log("listening on port 5000..."));
