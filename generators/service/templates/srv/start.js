'use strict';

const seneca = require('seneca');
const mesh = require('seneca-mesh');

const service = require('../service');

const opts = {
    seneca: {
        tag: '<%= serviceName %>'
    },
    mesh: {
        auto: true,
        pins: ['role:<%= serviceName %>']
    },
    plugin: {

    }
};

seneca(opts.seneca)
    .use(service, opts.plugin)
    .use(mesh, opts.mesh);
