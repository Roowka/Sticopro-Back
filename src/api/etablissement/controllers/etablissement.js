'use strict';

/**
 * etablissement controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::etablissement.etablissement', ({ strapi }) => ({
    async getEtablissementMedias(ctx) {
        try{
            const id = ctx.params.id;

            const etablissement = await strapi.entityService.findOne('api::etablissement.etablissement', id, {
                populate: { category: true },
              });

            if(etablissement){
                try {
                    const result = await strapi.entityService.findOne('api::etablissement.etablissement', id, {
                      filters: {
                        id: id
                      },
                      populate: '*',
                    })
                    ctx.body = result;
                  } catch (err) {
                    console.error("Erreur lors de l'exécution de la requête SQL :", err);
                    ctx.status = 500;
                    ctx.body = { error: "Une erreur s'est produite lors de la récupération de l'image." };
                  }
                  
            }else{
                ctx.notFound()
            }
        } catch(err){
            ctx.body = err
        }
    }
}));
