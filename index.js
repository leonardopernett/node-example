const express = require('express')
const cors = require('cors')
const app = express()



const port = process.env.PORT || 3000
app.get('/',(req,res)=>{
  res.send('express yeah modificado')
  
})


app.listen(port);
console.log('server on port  3000')