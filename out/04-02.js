"use strict";
// 4. Http Codes
// Write a function that takes in objects representing HTTP Responses and prints their text information. Here are all
// the HttpResponse objects your function needs to be able to process:
function httpStatus(obj) {
    if ('printChars' in obj) {
        console.log(obj.text.slice(0, obj.printChars));
    }
    else {
        console.log(obj.text);
    }
}
httpStatus({ code: 200, text: 'OK' });
httpStatus({ code: 201, text: 'Created' });
httpStatus({ code: 400, text: 'Bad Request', printChars: 4 });
httpStatus({ code: 404, text: 'Not Found' });
httpStatus({ code: 404, text: 'Not Found', printChars: 3 });
httpStatus({ code: 500, text: 'Internal Server Error', printChars: 1 });
//# sourceMappingURL=04-02.js.map