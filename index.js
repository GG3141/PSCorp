const express = require('express');
const DataStore = require('nedb')
const database = new DataStore('database.txt')
database.loadDatabase()
const app = express();
const port = process.env['PORT']
app.use(express.static('public'))
app.use(express.json({ limit: '1mb' }))


app.post('/api',async (req, res)=>{
  console.log(req.body)
  database.insert(req.body)

  })

app.get('/download', function(req, res){
  const file = `${__dirname}/database.txt`;
  res.download(file)
});

app.get('/terms', (req, res)=>{
  const file = `${__dirname}/terms.txt`;
  res.download(file)
})

app.get('')

app.listen(port, () => {
  console.log(port);
});
