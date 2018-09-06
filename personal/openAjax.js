 1 /* 封装ajax函数
 2  * @param {string}opt.type http连接的方式，包括POST和GET两种方式
 3  * @param {string}opt.url 发送请求的url
 4  * @param {boolean}opt.async 是否为异步请求，true为异步的，false为同步的
 5  * @param {object}opt.data 发送的参数，格式为对象类型
 6  * @param {function}opt.success ajax发送并接收成功调用的回调函数
 7  */
function ajax(opt) {
    opt = opt || {};
    opt.type = opt.type.toUpperCase() || 'GET';
    opt.url = opt.url || '';
    opt.async = opt.async || true;
    opt.data = opt.data || null;
    opt.success = opt.success || function () {
    };
    var xhr = null;
    if (XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
	var postData = serialize(opt.data);
    if (opt.type.toUpperCase() === 'POST') {
        xhr.open(opt.type, opt.url, opt.async);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        xhr.send(postData);
    }
    else if (opt.type.toUpperCase() === 'GET') {
        xhr.open(opt.type, opt.url + '?' + postData, opt.async);
        xhr.send(null);
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                var res = JSON.parse(xhr.responseText);
                xhr = null;
                if (opt.success) {
                    opt.success(res);
                }
            } else {
                if (opt.error) {
                    opt.error(xhr.status);
                }
            }
        }
    };
    xhr.onerror = function () {

    }
}
function serialize(data) {
	var params = [];
    for (var key in data) {
        params.push(key + '=' + data[key]);
    }
    return params.join('&');
}


