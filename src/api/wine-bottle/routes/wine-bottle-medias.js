'use strict'

module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/wine-bottles/medias/:id',
            handler: 'api::wine-bottle.wine-bottle.getWineBottleMedias',
            config: {
                auth: false
            }
        }
    ]
}