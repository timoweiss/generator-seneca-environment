'use strict';

module.exports = {
    serviceAction,
    serviceAction2
};


function serviceAction(args, callback) {
    callback(null, {data: 'data'});
}

function serviceAction2(args, callback) {
    callback(null, {data: 'data'});
}