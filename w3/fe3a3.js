//完成的题目: 1 2 3 4 5 6 7 8 9 10 11
// 2017/02/22
// 作业 3
//
// 注意, 自行去定义 log 函数(抄上课的代码)
// 注意, 代码可以在写好后贴在 浏览器终端 中运行
// 注意, 这个链接会更新, 我会增加新的题目提示和『交作业的方式』
var log = function() {
    console.log.apply(console, arguments)
}

// 例子 1
// 求数组的和
var sum = function(array) {
    // 先设置一个变量用来存 和
    var s = 0
    // 遍历数组
    for(var i = 0; i < array.length; i++) {
        // 用变量 n 保存元素值
        var n = array[i]
        // 累加到变量 s
        s = s + n
    }
    // 循环结束, 现在 s 里面存的是数组中所有元素的和了
  	return s
}

var a = [1, 2, 3, 4]
log('sum', sum(a))



// 作业 1
// 参数是一个只包含数字的 array,var a = [5, 2, 3, 4]
// 求 array 的乘积
// 函数定义是
var product = function(array) {
    var s = 1
    for(var i = 0; i < array.length; i++){
        var a = array[i]
        s = s * a
    }
    return s
}
var array = [1, 2, 4, 9]
log('乘积:', product(array))
// 作业 2
// 返回一个数的绝对值
// 函数定义是
var abs = function(n) {
    if(n < 0){
        n = -n
    }
    return n
}
var a = -3
log(abs(a))

// 作业 3
// 参数是一个只包含数字的 array
// 求 array 中所有数字的平均数
// 函数定义是
var average = function(array) {
    var avg = 0
    var length = array.length
    for(var i = 0; i < array.length; i++){
        avg = avg + array[i]
    }
    avg = avg / length
    return avg
}

// 作业 4
// 参数是一个只包含数字的 array
// 求 array 中最小的数字
// 函数定义是
var min = function(array) {
    var m = array[0]
    for(var i = 1; i < array.length; i++){
        if(array[i] < m){
            m = array[i]
        }
    }
    return min
}


// 作业 5
/*
参数是一个数字 n
返回以下序列的结果
1 - 2 + 3 - 4 + 5 ... n
*/
var sum1 = function(n) {
    var s = 0
    for(var i = 1; i < n + 1; i++){
        s = s + i *Math.pow(-1, i + 1)
    }
    return s
}


// 作业 6
/*
参数是一个数字 n
返回以下序列的结果
1 + 2 - 3 + 4 - ... n
*/
var sum2 = function(n) {
    var s = 0
    for(var i = 1; i < n + 1; i++){
        s = s + i *Math.pow(-1, i)
    }
    //修正s
    s = s + 2
    return s
}


// 作业 7
/*
实现 fac 函数
接受一个参数 n
返回 n 的阶乘, 1 * 2 * 3 * ... * n
*/
var fac = function(n) {
    var fac = 1
    for(var i = 1; i < n + 1; i++){
        fac = fac * i
    }
    return fac
}



/*
注意 下面几题中的参数 op 是 operator(操作符) 的缩写

作业 8
实现 apply 函数
参数如下
op 是 string 类型, 值是 '+' '-' '*' '/' 其中之一
a b 分别是 2 个数字
根据 op 对 a b 运算并返回结果(加减乘除)
*/
var apply = function(op, a, b) {
    if(op == '+') {
        return a + b
    }
    if(op == '-'){
        return a - b
    }
    if(op == '*'){
        return a * b
    }
    if(op == '/'){
        return a / b
    }
}


/*
作业 9
实现 applyList 函数
op 是 '+' '-' '*' '/' 其中之一
oprands 是一个只包含数字的 list
根据 op 对 oprands 中的元素进行运算并返回结果
例如, 下面的调用返回 -4
var n = applyList('-', [3, 4, 2, 1])
log(n)
// 结果是 4, 用第一个数字减去所有的数字
*/
var applyList = function(op, oprands) {
    var s = oprands[0]
    for(var i = 1; i < oprands.length; i++){
        s = apply(op, s, oprands[i])
    }
    return s
}


/*
作业 10
实现 applyCompare 函数
参数如下
expression 是一个 array(数组), 包含了 3 个元素
第一个元素是 op, 值是 '>' '<' '==' 其中之一
剩下两个元素分别是 2 个数字
根据 op 对数字运算并返回结果(结果是 true 或者 false)
*/
var applyCompare = function(expression) {
    if(expression[0] == '>') {
        return expression[1] > expression[2]
    }
    if(expression[0] == '<'){
        return expression[1] < expression[2]
    }
    if(expression[0] == '=='){
        return expression[1] == expression[2]
    }
}


/*
注意
下面这题做不出来没关系

作业 11
实现 applyOps 函数
参数如下
expression 是一个 array
expression 中第一个元素是上面几题的 op, 剩下的元素是和 op 对应的值
根据 expression 运算并返回结果
*/
var applyOps = function(expression) {
    if((expression[0] == '+')||(expression[0] == '-')||(expression[0]
        == '*')||(expression[0] == '/')){
        var a = expression[0]
        var list1 = expression.slice(1)
        return applyList(a, list1)

    }
    else {
        return applyCompare(expression)
    }
}
//使用includes:
var applyOps = function(expression) {
    var op = expression[0]
    var s1 = ["+", "-", "*", "/"]
    if(s1.includes(op)){
        var list1 = expression.slice(1)
        return applyList(op, list1)

    }
    else {
        return applyCompare(expression)
    }
}



// 注意
// 下次作业起, 会用更标准简练的方式来表示参数类型和说明
// 另外, 下次开始会引入测试这个概念, 会用更简单的方式执行程序
