function isPasswd(s) {
	var patrn = /^(\w){6,12}$/;
	if(!patrn.exec(s)) return false
	return true
}
//校验用户名：2-6中文
function isChineseChar(str) {
	var reg = /[\u4E00-\u9FA5\uF900-\uFA2D]{2,6}/;
	return reg.test(str);
}

function dialoginfo(msg, fn) {
	mui.alert(msg, fn)
}