'use strict'

module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/etablissements/medias/:id',
            handler: 'api::etablissement.etablissement.getEtablissementMedias',
            config: {
                auth: false
            }
        }
    ]
}