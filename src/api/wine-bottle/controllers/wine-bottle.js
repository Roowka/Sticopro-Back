'use strict';

/**
 * wine-bottle controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::wine-bottle.wine-bottle', ({ strapi }) => ({

    lifecycles:{
      async beforeCreate(data) {
    
          data.qrCodeUrl ="wine-bottle\\" + crypto.randomUUID();

        },  
    },
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
    },

    async findByUuid(ctx) {
        
        const uidBottle  = ctx.params.uid;

        try {
            const wineBottle = await strapi.db.query('api::wine-bottle.wine-bottle').findOne({
                select: ['name','uid','qrCodeUrl'],
                where: { id: uidBottle },
                populate: { category: true },
              });
                  
          if (!wineBottle) {
            return ctx.notFound('Wine bottle not found');
          }
    
          ctx.send(wineBottle);

        } catch (error) {
          ctx.throw(500, 'Internal Server Error');
        }
    },
}));