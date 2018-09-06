  ; (function (w) {
    w.NNCP = {
      setCookie (key, val, params) {
        var cookie = key + '=' + val + ';';
        for (p in params) {
          cookie = cookie + p + '=' + params[p] + ';';
        }
        document.cookie = cookie;
      },
      getCookie (name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
          return arr[2];
        else
          return '';
      },
      clearCookie () {
        this.setCookie("username", "", -1);
      }
    }
  }(window));