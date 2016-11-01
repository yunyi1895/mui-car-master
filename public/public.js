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

function isMobile(phone){
  // 根据号码段的不同和前缀不同可适当修改
  var reValue = /^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57]|17[0-9])[0-9]{8}$/;
  if(!reValue.test(phone)){
    return false;
  }else{
    return true;
  }
} 

function isEmail(email){
  // @符号前后直接相邻不能为 .
  var reEmail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
  if(!reEmail.test(email)){
    return false;
  }else{
    return true;
  }
} 

function isQQ(qq){
  var reQQ = /^[1-9]\d{4,9}$/; 
  if(!reQQ.test(qq)){
    return false;
  }else{
    return true;
  }
} 
function isbankcard(b){
	var reg = /^\d{19}$/g; // 以19位数字开头，以19位数字结尾 
		if( !reg.test(b) ){ 
		return false
		}else{
			return true
		}
}
function sj(obj){
	console.log(JSON.stringify(obj))
}
