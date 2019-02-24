
var page = require('webpage').create(),
system = require('system');
if (system.args.length === 1) {
    console.log('Usage: xiaoshuo.js <some URL>');
    phantom.exit(1);
} else {
    page.address = system.args[1];
    page.viewportSize = { width: 1024, height: 768 };
    page.onLoadFinished =  function() {
        setTimeout(function(){
            var content_t = page.evaluate(function() {
                var arr = document.getElementById('content').children;
                var resultArr = [];
    
                for (var i = 0; i < arr.length; i++) {
                    resultArr[i] = '    ' + arr[i].innerText;
                }
                return resultArr.join("\n");
            });
            console.log(content_t);
            phantom.exit();
        },4000);
    };
    page.open(page.address, function (status) {
        if (status !== 'success') {
            console.log('FAIL to load the address');
            phantom.exit(1);
        } else {
            
        }
    });
}