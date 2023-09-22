'use strict';

/**
 * wine-bottle controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::wine-bottle.wine-bottle', ({ strapi }) => ({
     async getWineBottleMedias(ctx) {
        try{
            const id = ctx.params.id;

            const wineBottle = await strapi.entityService.findOne('api::wine-bottle.wine-bottle', id, {
                populate: { category: true },
              });

            if(wineBottle){
                try {
                    const result = await strapi.entityService.findOne('api::wine-bottle.wine-bottle', id, {
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