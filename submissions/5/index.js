/*
    Assuming the responsibility of this function is to print the count
    starting from 1 to 5 at every second, I have logged i+1. If we need to
    print counter from 0 to 4 instead, the logged value would be only i./
*/
for (var i = 0; i < 5; i++) {
    (function(i) {
        setTimeout(function() { console.log(i+1); }, i * 1000 );
    })(i);
}

