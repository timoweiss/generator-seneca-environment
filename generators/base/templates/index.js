'use strict';

const seneca = require('seneca')({
    tag: 'base'
});

seneca.use('mesh', {base: true});

