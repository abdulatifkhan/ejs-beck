const express = require('express')
const ejs = require('ejs')
const app = express()

const { DATA } = require('./views/components/data')
const data = DATA

const PORT = 4010

app.engine('html', ejs.renderFile)

app.set('view engine', 'html')

app.use(express.static('static'))

// app.set('views', 'src/views')



app.get('/', (_, res) => {
  res.render('main', data)
})

// view/:id?/*

app.get('/view/:id?', (req, res) => {
  let obj = {}

  data.groupmates.map((findprofile) => {
      if (findprofile.id === Number(req.params.id) ) {
        obj = findprofile
      }
  })
  res.render('view', obj)
})

app.listen(process.env.PORT || PORT, () => console.log(PORT))