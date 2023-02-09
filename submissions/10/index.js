const async = require('async');

function runConcurrentPromises(promises, concurrency) {
    async.eachLimit(promises, concurrency, (promise, callback) => {
        promise.then(() => {
            callback();
        });
    });
}

//runConcurrentPromises(promises, 10)
