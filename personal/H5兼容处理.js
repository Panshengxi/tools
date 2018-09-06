        var browser = {  
            versions: function () {  
                var u = navigator.userAgent, app = navigator.appVersion;  
                return {//移动终端浏览器版本信息  
                    trident: u.indexOf('Trident') > -1, //IE内核  
                    presto: u.indexOf('Presto') > -1, //opera内核  
                    webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核  
                    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核  
                    mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端  
                    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端  
                    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器  
                    iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器  
                    iPad: u.indexOf('iPad') > -1, //是否iPad  
                    webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部  
                };  
            } (),  
            language: (navigator.browserLanguage || navigator.language).toLowerCase()  
        }  
        function isIOS9() {  
            //获取固件版本  
            var getOsv = function () {  
                var reg = /OS ((\d+_?){2,3})\s/;  
                if (navigator.userAgent.match(/iPad/i) || navigator.platform.match(/iPad/i) || navigator.userAgent.match(/iP(hone|od)/i) || navigator.platform.match(/iP(hone|od)/i)) {  
                    var osv = reg.exec(navigator.userAgent);  
                    if (osv.length > 0) {  
                        return osv[0].replace('OS', '').replace('os', '').replace(/\s+/g, '').replace(/_/g, '.');  
                    }  
                }  
                return '';  
            };  
            var osv = getOsv();  
            var osvArr = osv.split('.');  
            //初始化显示ios9引导  
            if (osvArr && osvArr.length > 0) {  
                if (parseInt(osvArr[0]) >= 9) {  
                    return true  
                }  
            }  
            return false  
        }  
        function Return_url(app_url) {  
            if (browser.versions.ios || browser.versions.iPhone || browser.versions.iPad) {  
                if (isIOS9()) {  
                    window.location = "";  
                }  
                else {  
                    window.location = "";  
                }  
            }  
            else if (browser.versions.android) {  
                window.location = app_url;  
            }  
            else {  
                window.location = app_url;  
            }  
        }  