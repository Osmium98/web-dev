const express = require('express')
const app = express()
const port = 3000




app.post('/conversations', (req, res) => {
    res.send('<b>hi there <b>');
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})