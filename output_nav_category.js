var page = require('webpage').create(),
system = require('system');
if (system.args.length === 1) {
    console.log('Usage: xiaoshuo.js <some URL>');
    phantom.exit(1);
} else {
    page.address = system.args[1];
    page.open(page.address, function (status) {
        if (status !== 'success') {
            console.log('FAIL to load the address');
            phantom.exit(1);
        } else {
            var content_t = page.evaluate(function() {
                var arr = document.getElementsByClassName('nav')[0].children;
                var resultArr = [];
   
                for (var i = 0; i < arr.length; i++) {
                    resultArr[i] = arr[i].href;
                }
                return resultArr.join("\n");
            });
            console.log(content_t);
            phantom.exit();
        }
    });
}