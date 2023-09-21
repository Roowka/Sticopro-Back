'use strict';

/**
 * qr-code-bottle service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::qr-code-bottle.qr-code-bottle');
