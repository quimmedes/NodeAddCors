const express = require('express')
const axios = require('axios').default;
var cors = require('cors')


const app = express()
const port = 8081

app.use(cors())


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/:id', (req, res) => {


    // Make a request for a user with a given ID
axios.get('https://mercado.carrefour.com.br/api/checkout/pub/regions?country=BRA&postalCode='+ req.params.id)
.then(function (response) {
  // handle success
  res.json(response.data);
  console.log(response);
})
.catch(function (error) {
  // handle error
  console.log(error);
})
.then(function () {
  // always executed
});

    }
  );




  app.get('/loja/:id', (req, res) => {


    // Make a request for a user with a given ID
axios.get('https://mercado.carrefour.com.br/api/catalog_system/pub/products/search?fq='+ req.params.id)
.then(function (response) {
  // handle success
  res.json(response.data);
  console.log(response);
})
.catch(function (error) {
  // handle error
  console.log(error);
})
.then(function () {
  // always executed
});

    }
  );




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
