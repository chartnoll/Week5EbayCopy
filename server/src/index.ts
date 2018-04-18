// src/index.ts
import 'reflect-metadata'
import { createKoaServer } from 'routing-controllers'
import AdvertController from './adverts/controller'
import setupDb from './db'

const app = createKoaServer({
    controllers: [
        AdvertController
    ]
})

setupDb()
    .then(_ =>
        app.listen(4000, () => console.log('Listening on port 4000'))
    )
    .catch(err => console.error(err))