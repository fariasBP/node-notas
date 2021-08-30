import express from 'express'
import morgan from 'morgan'

import indexRoute from './routes/indexRoute'
import productsRoute from './routes/productsRoute'

const app = express()

app
    .set('port', process.env.PORT || 3000)

app
    .use(express.json())
    .use(express.urlencoded({extended: false}))
    .use(morgan('dev'));

app
    .use('/', indexRoute)
    .use('/products', productsRoute)

export default app;