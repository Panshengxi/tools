  var activeFlag = true;
  function activity_rule() {
    var mask = document.querySelector('.mask');
    var activityRule = document.querySelector('.activity-rule');
    if (activeFlag) {
      activeFlag = false;
      mask.className = 'mask active';
      activityRule.className = 'activity-rule active';
      animate(activityRule, 0);
    } else {
      activeFlag = true;
      activityRule.className = 'activity-rule no-active';
      var height = parseInt(getStyle(activityRule, 'height'));
      animate(activityRule, -height, function () {
        mask.className = 'mask';
      })
    }
  }
  function animate(obj, target, callback) {
    clearInterval(obj.timerId);
    obj.timerId = setInterval(function () {
      var flag = true;
      var current = parseInt(getStyle(obj, 'top'));
      var step = (target - current) / 10;
      step = step > 0 ? Math.ceil(step) : Math.floor(step);
      current += step;
      obj.style.top = current + 'px';
      if (current != target) flag = false;
      if (flag) {
        clearInterval(obj.timerId);
        if (typeof callback == "function") callback();
      }
    }, 30);
  }
  function getStyle(ele, attr) {
    if (ele.currentStyle) {
      return ele.currentStyle[attr]
    } else {
      //null
      return getComputedStyle(ele, null)[attr];
    }
  }
  
  
   document.body.addEventListener("DOMNodeRemoved",function(event){
                    if(sessionStorage.authFlag){
                        _this.loadUserInfo();
                    }

                    console.log(event.type);        //1:DOMNodeRemoved
                    console.log(event.target);      //2:ul节点,即被删除的节点
                    console.log(event.relatedNode); //3:body节点,即被删除节点的父节点
                })