'use strict';

/**
 * wine-bottle controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::wine-bottle.wine-bottle', ({ strapi }) =>  ({
    
  lifecycles:{
      async beforeCreate(data) {
    
          data.qrCodeUrl ="wine-bottle\\" + crypto.randomUUID();

        },  
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