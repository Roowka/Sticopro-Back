'use strict';

/**
 * wine-bottle controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::wine-bottle.wine-bottle', ({ strapi }) =>  ({
    
  lifecycles:{
      async beforeCreate(data) {
    
          data.url ="wine-bottle\\" + crypto.randomUUID();

        },  
  },

}));