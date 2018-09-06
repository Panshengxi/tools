; (function (w) {

    /**
     * 实现拖拽元素功能
     * @param {*} parentEle 父元素
     * @param {*} sunEleArray 子元素
     */
    function drag(parentEle, sunEleArray) {
        var divDom;
        for (var i = 0; i < sunEleArray.length; i++) {
            sunEleArray[i].ondragstart = function () {
                divDom = this;

            }
        }
        parentEle.ondrop = function () {

            this.appendChild(divDom);
        }
        parentEle.ondragover = function (e) {
            e.preventDefault();
        }

    }
    w.drag = drag;
    /**
     * 拖拽盒子
     * @param {*} ele 
     */
    w.dragDiv = dragDiv;
    function dragDiv(ele) {
        var x1 = one.offsetWidth / 2;
        var y1 = one.offsetHeight / 2;
        ele.onmousedown = function (e) {
            e = e || window.event;
            document.onmousemove = function (e) {
                e = e || window.event;
                var x = e.pageX;
                var y = e.pageY;
                ele.style.left = x - x1 + "px";
                ele.style.top = y - y1 + "px";
            }
        }
        document.onmouseup = function () {
            document.onmousemove = null;
        }
    }
    /**
     * 视频进度条控件
     * @param {*} video 视频元素
     * @param {*} parentEle 父元素
     * @param {*} sunEle 子元素
     */
    function progress(video, parentEle, sunEle) {
        parentEle.onclick = function (e) {
            //        console.log(e);
            var Value = e.offsetX / this.offsetWidth;
            sunEle.style.width = Value * 100 + "%";
            video.currentTime = video.duration * Value;
        }
        // 每当播放位置发生改变就调用
        video.ontimeupdate = function () {

            // console.log('...');
            // 取到当前播放时间和总时长，除以得到百分比，再把这个百分比作为进度值的宽度
            var result = video.currentTime / video.duration;
            sunEle.style.width = result * 100 + '%';
        }
    }
    w.progress = progress;
    /**
     * 播放及声音控件
     * @param {*} ele 要操作的元素
     * @param {*} str1Class 类名1
     * @param {*} str2Class 类名2
     * @param {*} boolean 
     * @param {*} str3Position 定位
     */
    function tabTurn(ele, str1Class, str2Class, boolean, str3Position) {
        ele.classList.remove(str1Class);
        ele.classList.add(str2Class);
        if (str3Position) {
            ele.style.left = str3Position;
        }
        ele.index = boolean;
    }
    w.tabTurn = tabTurn;
    /**
     * 从桌面拖拽图片的浏览器
     * @param {*} ele 
     */
    function desToBro(ele) {
        ele.ondrop = function (e) {
            e.preventDefault();
            var reader = new FileReader();
            reader.readAsDataURL(e.dataTransfer.files[0]);
            reader.onload = function () {
                ele.style.background = 'url(' + reader.result + ')';
            }
        }
        ele.ondragover = function (e) {
            e.preventDefault();
        }
    }
    w.desToBro = desToBro;
	function download(){
		var Form = document.createElement('form');
        Form.method = 'get';
        Form.setAttribute("action","http://static.niuniucaip.com/apk/1.0.1/10013.apk");
		document.body.append(Form);
        Form.submit();
	}
    /**
     * 通过表单input标签传图片到浏览器
     * @param {*} fileDom input元素
     */
    function formToBro(fileDom) {
        fileDom.onchange = function () {
            var reader = new FileReader();
            reader.readAsDataURL(this.files[0]);
            reader.onload = function () {
                document.body.style.background = 'url(' + reader.result + ')';
            }
        }
    }
    w.formToBro = formToBro;
	 /*兼容iel浏览器Date*/
        newDate:function (str) {
            if(!str){
                return 0;
            }
            arr=str.split(" ");
            d=arr[0].split("-");
            t=arr[1].split(":");
            var date = new Date();
            date.setUTCFullYear(d[0], d[1] - 1, d[2]);
            date.setUTCHours(t[0], t[1], t[2], 0);
            return date;
        }
		w.newDate = newDate;
    /**
     * 随机颜色方法
     * @param {*} eleArray 元素数组
     */
    function randomColor(eleArray) {
        var arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
        for (var i = 0; i < eleArray.length; i++) {
            var str = '#';
            for (var j = 0; j < 6; j++) {
                var index = Math.floor(Math.random() * 16);
                str += arr[index];
            }
            eleArray[i].style.backgroundColor = str;
        }
    }
    w.randomColor = randomColor;
    /**
     * 斐波那契数列第n项的和
     * @param {*} n 
     */
    function getNum(n) {
        if (n == 1 || n == 2) {
            return 1;
        } else {
            return getNum(n - 2) + getNum(n - 1);
        }
    }
    w.getNum = getNum;
    /**
     * 获取dom元素
     * @param {*} eleStr 
     */
    function $(eleStr) {
        if (eleStr.includes('#')) return document.querySelector(eleStr);
        else return document.querySelectorAll(eleStr);
    }
    w.$ = $;
    /**
     * 阻止AJAX请求
     */
    (function (open) {

        XMLHttpRequest.prototype.open = function (method, url, async, user, pass) {

            this.addEventListener("readystatechange", function () {

                if (this.readyState == 4) {
                    //在这可以获取到response数据，并且修改
                    console.log(this.status);
                }
            }, false);

            open.call(this, method, url, async, user, pass);
            //在这添加自定义数据
            this.setRequestHeader("Authorization", "Token 123")
        };
    })(XMLHttpRequest.prototype.open);
    /**
* Created by Administrator on 8/8/2017.
*/
    /***
     * 单属性轮播图匀速动画
     * @param obj
     * @param target
     */
    w.animatey = animatey;
    function animatey(obj, target) {
        clearInterval(obj.timerID);
        obj.timerID = setInterval(function () {
            var currentLeft = obj.offsetLeft;
            var step = currentLeft < target ? 10 : -10;
            currentLeft += step;
            if (Math.abs(currentLeft - target) < Math.abs(step)) {
                obj.style.left = target + "px";
                clearInterval(obj.timerID);
            } else {
                obj.style.left = currentLeft + "px";
            }
        }, 30);
    }
    /***
     * 单属性轮播图缓动动画
     * @param obj
     * @param target
     * @param fn
     */
    w.animate = animate;
    function animate(obj, target, fn) {

        clearInterval(obj.timerID);

        obj.timerID = setInterval(function () {

            var flag = true;

            var current = obj.offsetLeft;

            var step = (target - current) / 10;

            current += step;
            obj.style.left = current + "px";
            if (current != target) {

                flag = false;
            }
            console.log(step + "---" + current);
            if (flag) {

                clearInterval(obj.timerID);
                if (typeof fn == "function") {
                    fn();
                }
            }
        }, 30);
    }
    /***
     * 轮播图缓动动画
     * @param obj
     * @param attrs
     * @param fn
     */
    w.animates = animates;
    function animates(obj, attrs, fn) {

        clearInterval(obj.timerID);

        obj.timerID = setInterval(function () {

            var flag = true;

            for (var key in attrs) {
                if (key == "opacity") {

                    var current = parseInt(getStyle(obj, key) * 100 || 0);

                    var step = (attrs[key] * 100 - current) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);

                    current += step;
                    obj.style[key] = current / 100;

                    if (current / 100 != attrs[key]) {
                        flag = false;
                    }
                    console.log("step-current:" + key + "-" + step + "-" + current);
                } else if (key == "z-index") {

                    var current = parseInt(getStyle(obj, key) || 0);

                    var step = (attrs[key] - current) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);

                    current += step;
                    obj.style[key] = current;

                    if (current != attrs[key]) {
                        flag = false;
                    }
                    console.log("step-current:" + key + "-" + step + "-" + current);
                } else {

                    var current = parseInt(getStyle(obj, key) || 0);

                    var step = (attrs[key] - current) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);

                    current += step;
                    obj.style[key] = current + "px";


                    if (current != attrs[key]) {
                        flag = false;
                    }
                    console.log("step-current:" + key + "-" + step + "-" + current);
                }
            }

            if (flag) {

                clearInterval(obj.timerID);

                if (typeof fn == "function") {
                    fn();
                }
            }
        }, 30);
    }
    /***
     * 兼容样式属性
     * @param ele 
     * @param attr
     * @returns {*}
     */
    function getStyle(ele, attr) {
        if (ele.currentStyle) {
            return ele.currentStyle[attr]
        } else {
            //null
            return getComputedStyle(ele, null)[attr];
        }
    }

    /***
     * 兼容scrollTop、scrollLeft
     * @returns {{scrollTop: (Number|number), scrollLeft: (Number|number)}}
     */
    function getScroll() {
        return {
            scrollTop: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
            scrollLeft: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
        };
    }
    w.getScroll = getScroll;
    /***
     * 兼容clientHeight、clientWidth
     * @returns {{clientHeight: (Number|number), clientWidth: (Number|number)}}
     */
    function getClient() {
        return {
            clientHeight: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0,
            clientWidth: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0
        };
    }
    w.getClient = getClient;
    /***
     *获取pageX pageY
     * @param e
     * @returns {{pageX: string, pageY: string}}
     */
    function getPage(e) {
        e = e || window.event;
        return {
            pageX: e.clientX + document.documentElement.scrollLeft,
            pageY: e.clientY + document.documentElement.scrollTop
        };
    }
    w.getPage = getPage;
    /***
     * 生成表格
     * @param obj
     */
    function createRow(obj) {
        var tr = document.createElement("tr");
        table.appendChild(tr);
        for (var key in obj) {
            var td = document.createElement("td");
            setText(td, obj[key]);
            tr.appendChild(td);
        }
        var td = document.createElement("td");
        td.setAttribute("class", "optd");
        tr.appendChild(td);
        //        声明空数组
        var inputs = [];
        for (var j = 0; j < btns.length; j++) {
            var input = document.createElement("input");
            input.type = "button";
            input.value = btns[j];
            inputs[inputs.length] = input;
            td.appendChild(input);
            //注册事件
            if (j == 0) {
                inputs[j].onclick = moveUp;
            } else if (j == 1) {
                inputs[j].onclick = moveDown;
            } else {
                inputs[j].onclick = delRow;
            }
        }
    }
    w.createRow = createRow;
    //向上移动
    function moveUp() {
        var tr = this.parentNode.parentNode;
        var previous = tr.previousElementSibling;
        if (previous.previousElementSibling) {
            table.insertBefore(tr, previous);
        } else {
            alert("已经是第一行");
        }
    }
    //向下移动
    function moveDown() {
        var tr = this.parentNode.parentNode;
        var next = tr.nextElementSibling;
        if (next) {
            table.insertBefore(next, tr);
        } else {
            alert("已经是最后一行了");
        }
    }
    //删除一行
    function delRow() {
        var res = confirm("你确定要删除吗？");
        if (res) {
            var tr = this.parentNode.parentNode;
            tr.remove(tr);
        }
    }
    /***
     * 添加事件
     * @param obj 元素
     * @param type 事件类型
     * @param listener 回调函数
     */
    function addEventListener(obj, type, listener) {
        if (obj.addEventListener) {
            obj.addEventListener(type, listener, false);
        } else if (obj.attachEvent) {
            obj.attachEvent("on" + type, listener);
        } else {
            obj["on" + type] = listener;
        }
    }
    w.addEventListener = addEventListener;
    /***
     * 移除事件
     * @param obj   元素
     * @param type  事件类型
     * @param listener  回调函数
     */
    function removeEvent(obj, type, listener) {
        if (obj.removeEventListener) {
            obj.removeEventListener(type, listener, false);
        } else if (obj.detachEvent) {
            obj.detachEvent("on" + type, listener);
        } else {
            obj["on" + type] = null;
        }
    }
    w.removeEvent = removeEvent;
    /***
     * 阻止冒泡事件
     * @param e
     */
    function stopBuble(e) {
        e = e || window.event;

        if (e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
    }
    w.stopBuble = stopBuble;
    /**
     * 时钟功能插件
     * @param {*} eleHour 时针
     * @param {*} eleMin 分针
     * @param {*} eleScend 秒针
     */
    function setClock(eleHour, eleMin, eleScend) {

        var date = new Date();
        var hour = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        var millSec = date.getMilliseconds();

        var sDeg = (360 / 60) * (sec + millSec / 1000);
        var mDeg = (360 / 60) * (min + sec / 60);
        var hDeg = (360 / 12) * (hour + min / 60);
        eleScend.style.transform = "rotate(" + sDeg + "deg)";
        eleMin.style.transform = "rotate(" + mDeg + "deg)";
        eleHour.style.transform = "rotate(" + hDeg + "deg)";
    }
    w.setClock = setClock;
    /**
     * 同意按钮
     * @param {*} ele 要禁用的元素
     */
    function agree(ele) {
        var time = 10;
        var timerID = null;
        timerID = setInterval(function () {
            time--;
            if (time <= 0) {
                clearInterval(timerID);
                ele.disabled = false;
                ele.value = "同意";
            } else {
                ele.value = "请仔细阅读协议(" + time + ")";
            }
        }, 1000);
    }
    w.agree = agree;
    /**
     * 图片按时间切换
     * @param {*} ele 
     * @param {*} path 
     */
    function showPic(ele, path) {
        var date = new Date();
        var hour = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        if (hour < 10) {
            hour = "0" + hour;
        }
        if (min < 10) {
            min = "0" + min;
        }
        if (sec < 10) {
            sec = "0" + sec;
        }
        ele.src = path + hour + "_" + sec + ".jpg";
    }
    w.showPic = showPic;
    /**
     * 拿到盒子中文本
     * @param {*} ele 
     */
    function getText(ele) {
        if (typeof ele.textContent == "string") {
            return ele.textContent;
        } else {
            return ele.innerText;
        }
    }
    w.getText = getText;
    /***
     * 设置盒子中文本
     * @param ele 
     * @param txt 
     */
    function setText(ele, txt) {
        if (typeof ele.textContent == "string") {
            ele.textContent = txt;
        } else {
            ele.innerText = txt;
        }
    }
    w.setText = setText;
    /***
     * 拿到下一个元素
     * @param ele
     * @returns {*}
     */
    function getNextElement(ele) {

        if (ele.nextElementSibling) {
            return ele.nextElementSibling;
        } else {

            var node = ele.nextSibling;
            while (node.nodeType != 1) {
                node = ele.nextSibling;
            }
            return node;
        }
    }
    w.getNextElement = getNextElement;
    /***
     * 拿到上一个元素
     * @param ele
     * @returns {*}
     */
    function getPreviousElement(ele) {
        if (ele.previousElementSibling) {
            return ele.previousElementSibling;
        } else {
            var node = ele.previousSibling;
            while (ele.previousSibling != 1) {
                node = ele.previousSibling;
            }
            return node;
        }
    }
    w.getPreviousElement = getPreviousElement;
    /***
     *  拿到第一个子元素
     * @param ele
     * @returns {*}
     */
    function getFirstElementChild(ele) {
        if (ele.firstElementChild) {
            return ele.firstElementChild;
        } else {
            var node = ele.firstChild;
            while (node.nodeType != 1) {
                node = node.nextSibling;
            }
            return node;
        }
    }
    w.getFirstElementChild = getFirstElementChild;
    /***
     * 拿到最后一个子元素
     * @param ele
     * @returns {*}
     */
    function getLastElementChild(ele) {
        if (ele.lastElementChild) {
            return ele.lastElementChild;
        } else {
            var node = ele.lastChild;
            while (node.nodeType != 1) {
                node = node.previousSibling;
            }
            return node;
        }
    }
    w.getLastElementChild = getLastElementChild;
    /***
     * 所以子元素移动到目标位置
     * @param go 当前元素
     * @param to 目标位置的父元素
     */
    function allToDes(go, to) {
        for (var i = 0; i < go.length; i++) {
            to.appendChild(go.children[i]);
            i--;
        }
    }
    w.allToDes = allToDes;
    /***
     * 被选中的元素移动到目标位置
     * @param go 被选中元素的父元素
     * @param to 目标位置的父元素
     */
    function selToDes(go, to) {
        for (var i = 0; i < go.length; i++) {
            if (go.children[i].selected) {
                to.appendChild(go.children[i]);
                i--;
            }
        }
    }
    w.selToDes = selToDes;
    /**
     * 创建元素标签或组件
     * @param {*} ele 
     */
    function createElement(ele) {
        return document.createElement(ele);
    }
    w.createElement = createElement;
    /**
     * 放大镜盒子方法
     * @param {*} parentBox 父盒子
     * @param {*} smallBox 小图片的盒子
     * @param {*} bigBox 大图片的盒子
     * @param {*} bigImg 大图片
     * @param {*} msk 遮罩层
     */
    function magnifying(parentBox, smallBox, bigBox, bigImg, msk) {
        smallBox.onmousemove = function (e) {
            e = e || window.event;
            msk.style.display = "block";
            bigBox.style.display = "block";

            var x = getPage(e).pageX - parentBox.offsetLeft;
            var y = getPage(e).pageY - parentBox.offsetTop;

            x -= msk.offsetWidth / 2;
            y -= msk.offsetHeight / 2;

            x = x < 0 ? 0 : x;
            y = y < 0 ? 0 : y;
            x = x > 200 ? 200 : x;
            y = y > 200 ? 200 : y;
            msk.style.left = x + "px";
            msk.style.top = y + "px";

            bigImg.style.left = -x * bigImg.offsetWidth / smallBox.offsetWidth + "px";
            bigImg.style.top = -y * bigImg.offsetHeight / smallBox.offsetHeight + "px";
        }
        smallBox.onmouseout = function () {
            msk.style.display = "none";
            bigBox.style.display = "none";
        }
    }
    w.magnifying = magnifying;
	/*递归实现排列组合*/
	function combination(arr, m) {
		var allResult = [];
		(function (arr, m, result) {
		  var len = arr.length;
		  if (m > len) return;
		  if (m == len) allResult.push([].concat(result, arr));
		  else {
			for (var i = 0; i < len; i++) {
			  var newResult = [].concat(result);
			  newResult.push(arr[i]);
			  if (m == 1) allResult.push(newResult);
			  else {
				var newArr = [].concat(arr);
				newArr.splice(0, i + 1);
				arguments.callee(newArr, m - 1, newResult);
			  }
			}
		  }
		})(arr, m, []);
		return allResult;
	  }
	 w.combination = combination;
}(window));