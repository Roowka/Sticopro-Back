'use strict';

/**
 * wine-bottle service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wine-bottle.wine-bottle');
