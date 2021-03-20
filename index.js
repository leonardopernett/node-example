const express = require('express')
const app = express()


app.get('/',(req,res)=>{
  res.send('express yeah')
  
})


app.listen(8080);
console.log('server on port  8080')