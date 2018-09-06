
exports.install = function (Vue, options) {
   // 1. 添加全局方法或属性
   Vue.myGlobalMethod = function () {
    // 逻辑...
  }
  // 2. 添加全局资源
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      // 逻辑...
    }
   
  })
  // 3. 注入组件
  Vue.mixin({
    created: function () {
      // 逻辑...
    }
    
  })
  // 4. 添加实例属性
  Vue.prototype.apihost ='http://vue.studyit.io/';
  // 5. 添加实例方法
  Vue.prototype.$myGet = function (url,callback) {
    this.$http.get(url).then(res => {
      callback(res);
    });
  }
  Vue.prototype.$myPost = function (url,data,callback) {
    this.$http.post(url, data,{emulateJSON:true}).then(res => {
      callback(res);
    });
  }
}

