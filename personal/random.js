/**
 * 随机生成一个数字
 * @param {*} max 最大值
 */
function rand(max) {
    return Math.ceil(Math.random() * max);
}
/**
 * 使sort排序时，值都是number
 * @param {*} a 
 * @param {*} b 
 */
function toNumber(a,b){
    return a-b;
}
/**
 * 随机生成一组不重复的数字
 * @param {*} max 最大值
 * @param {*} length 生成个数
 */
function start( max, length) {
    //定义空数组
    var arr = [];
    while (arr.length < length) {
        //生成一个随机数prem
        var prem = rand(max);
        //判断生成的随机数prem是否在数组arr里,果然不在，就将这个随机数插入到数组里，如果在，执行下一次循环
        if (arr.indexOf(prem) == -1) {
            
            arr.push(prem);
        }
    }
    arr.sort(toNumber)
    //返回数组arr
    return arr;
}