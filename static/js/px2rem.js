/**
 * Created by Mr.Liu on 2019/1/14.
 */
// 设置HTML
// 获取屏幕的可见区域的宽度(两种方法)和高度
console.log(document.documentElement.clientWidth)
console.log(document.documentElement.clientHeight)
var seeWidth = document.documentElement.clientWidth
// 获取HTML根元素
console.log(document.getElementsByTagName('html')[0])
var htmlEl = document.getElementsByTagName('html')[0]
// 设置根元素字体大小
htmlEl.style.fontSize = seeWidth / 10 + 'px'
