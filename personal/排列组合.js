/*
        组合实现的原理非常简单，就是依次循环数组的元素，循环的嵌套层数是有m来决定的，内部的循环下标在外部的下标加1。所以用function来组装
        */
    function combination(arr/*n需要组合的一维数组*/, num/*m需要取几个元素来组合*/, fun/*对组合后的元素的处理函数，如全排列permutate*/) {
        /*这里假设num最大值为10 一般A(n,m)中的m应该不会太大 */
        if (arr.length < num || num > 10) {
            return [];
        }
        var variable = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u"];
        var replaceStr = "#$#";
        var str = " var arr=arguments[0]; var fun=arguments[1];  var ret=[]; for (var a = 0; a < arr.length; a++) { " + replaceStr + " } return ret;"
        for (var i = 1; i < num; i++) {
            str = str.replace(replaceStr, " for (var " + variable[i] + " =" + variable[i - 1] + "+ 1; " + variable[i] + " < arr.length; " + variable[i] + "++) { " + replaceStr + "  }")
        }
        var temp = " var temp= []; ";
        for (var i = 0; i < num; i++) {
            temp += "temp.push(arr[" + variable[i] + "]); ";
        }

        if (fun) {
            temp += " ret.push(fun(temp)); ";
        }
        else {
            temp += " ret.push(temp); ";
        }
        str = str.replace(replaceStr, temp);
        return (new Function(str)).apply(null, [arr, fun]);
    }
	
	
	
	   function queue(arr, size) {
            if (size > arr.length) { return; }
            var allResult = [];

            (function (arr, size, result) {
                if (result.length == size) {
                    allResult.push(result);
                } else {
                    for (var i = 0, len = arr.length; i < len; i++) {
                        var newArr = [].concat(arr),
                            curItem = newArr.splice(i, 1);
                        arguments.callee(newArr, size, [].concat(result, curItem));
                    }
                }
            })(arr, size, []);

            return allResult;
        }
        function showResult(result) {
            console.log('The number of result sets: ' + result.length);
            for (var i = 0, len = result.length; i < len; i++) {
                console.log(result[i]);
            }
        }
