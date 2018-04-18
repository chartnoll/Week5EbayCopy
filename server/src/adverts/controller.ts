// src/pages/controller.ts
import { JsonController, Get, Put, Body, Param, Post, HttpCode } from 'routing-controllers'
import Advert from './entity';
type AdvertList = { adverts: Advert[] }

@JsonController()
export default class AdvertController {

    @Get('/adverts/:id')
    getAdvert(
        @Param('id') id: number
    ) {
        return Advert.findOneById(id)
    }

    @Get('/adverts')
    async allAdverts() {
        const advert = await Advert.find()
        return { advert }
    }

    @Post('/adverts')
    @HttpCode(201)
    createPage(
        @Body() advert: Advert
    ) {
        return advert.save()
    }
}