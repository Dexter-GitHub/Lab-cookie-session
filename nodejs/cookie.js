var http = require('http');
var cookie = require('cookie');

http.createServer(function(request, response) {
    console.log(request.headers.cookie);
    var cookies = {};
    if (request.headers.cookie !== undefined) {
        cookies = cookie.parse(request.headers.cookie);
    }
    console.log(cookies.yummy_cookie);

    response.writeHead(200, {
        'Set-Cookie':[
            'yummy_cookie=choco',
            'tasty_cookie=strawberry',
            `Peranent=cookies; Max-Age=${60*60*24*30}`,
            'Secure=Secure; Secure',                    // Https로 접근 제한
            'HttpOnly=HttpOnly; HttpOnly',              // JavaScript로 접근 제한
            'Path=Path; Path=/cookie',                  // 경로 제한
            'Domain=Domain; Domain=o2.org'              // 도메인 제한
        ]
    });
    response.end('Cookie!!');
}).listen(3000);