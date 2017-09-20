var setcookitarray = "";
setcookitarray = "[\"http://passport.a.com/main/setCookie.do?domain=\",\"http://passport.a.com/main/setCookie/main/setCookie.do?domain=.b.cn\",\"http://passport.a.com/main/setCookie/main/setCookie.do?domain=.c.com\",\"http://passport.a.com/main/setCookie/main/setCookie.do?domain=.d.cn\"]";
setcookitarray = eval(setcookitarray);
var setcookitarrayln = setcookitarray.length;

var notifyurl_list = setcookitarray;
var ll = setcookitarrayln;
var params = "yqVg1ennsNnxydEq4azcAP6TjhR90QCEUtB7gs45H08ltXBUNeoy_GczVyqC6cvZEwPGN0Al8XWKDsIt60YO1QsUlbK0Fip73Xz@7djs3ZmhBbAdanMbUH1Y@MVD2@@keR0S7njF5xiy@m6zaRWYNMbJ23jLDSrvEtMj0BExfYvFFe@twp3RHfD41dJOQzWz@nf8i@tJB12hNLIG4oW0eA==";
var failuretime = 2678400;
var backurl = "http://www.test.com";


loginALL(notifyurl_list, ll - 1, backurl, params, failuretime);

function loginALL(notifyurl_list, num, backurl, params, failuretime) {
    var u = notifyurl_list[num];
    if (typeof u != "undefined") {
        var url = notifyurl_list[num] + "&failuretime=" + failuretime + "&val=" + params;

        //动态生成script脚本标签执行url页面
        var login = request("loginScript" + num, url);
        num--;
        if (num < 0) {
            window.setTimeout(function() {
                window.location.href = backurl;
            }, 2000);

        } else {
            loginALL(notifyurl_list, num, backurl, params, failuretime);
        }
    }
}


function request(id, url) {
    oScript = document.getElementById(id);
    var head = document.getElementsByTagName("head").item(0);
    if (oScript) {
        head.removeChild(oScript);
    }
    oScript = document.createElement("script");
    oScript.setAttribute("src", url);
    oScript.setAttribute("id", id);
    oScript.setAttribute("type", "text/javascript");
    oScript.setAttribute("language", "javascript");
    head.appendChild(oScript);
    return oScript;
}