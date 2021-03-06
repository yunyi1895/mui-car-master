function isPasswd(s) {
	var patrn = /^(\w){6,12}$/;
	if(!patrn.exec(s)) return false
	return true
}
//校验用户名：1-5中文
function isChineseChar(str) {
	var reg = /[\u4E00-\u9FA5\uF900-\uFA2D]{1,5}/;
	return reg.test(str);
}

function dialoginfo(msg, fn) {
	mui.alert(msg, fn)
}

function isMobile(phone) {
	// 根据号码段的不同和前缀不同可适当修改
	var reValue = /^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57]|17[0-9])[0-9]{8}$/;
	if(!reValue.test(phone)) {
		return false;
	} else {
		return true;
	}
}
function ischina(str) {
	// 根据号码段的不同和前缀不同可适当修改
	var reValue = /^[\u4e00-\u9fa5]{0,}$/;
	if(!reValue.test(str)) {
		return false;
	} else {
		return true;
	}
}

function isEmail(email) {
	// @符号前后直接相邻不能为 .
	var reEmail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
	if(!reEmail.test(email)) {
		return false;
	} else {
		return true;
	}
}

function isQQ(qq) {
	var reQQ = /^[1-9]\d{4,9}$/;
	if(!reQQ.test(qq)) {
		return false;
	} else {
		return true;
	}
}

function isbankcard(b) {
	var reg = /^\d{19}$/g; // 以19位数字开头，以19位数字结尾 
	if(!reg.test(b)) {
		return false
	} else {
		return true
	}
}

function sj(obj) {
	console.log(JSON.stringify(obj))
}

function clearString(s) {
	var pattern = new RegExp("[\]")
	var rs = "";
	for(var i = 0; i < s.length; i++) {
		rs = rs + s.substr(i, 1).replace(pattern, '');
	}
	return rs;
}

function CheckImgExists(imgurl) {
	var ImgObj = new Image(); //判断图片是否存在
	ImgObj.src = imgurl;
	//没有图片，则返回-1
	if(ImgObj.fileSize > 0 || (ImgObj.width > 0 && ImgObj.height > 0)) {
		return true;
	} else {
		return false;
	}
}

function onNetChange() {　　 //获取当前网络类型
	　　
	var nt = plus.networkinfo.getCurrentType();　　
	switch(nt) {　　　　
		case plus.networkinfo.CONNECTION_ETHERNET:
			　　　　
		case plus.networkinfo.CONNECTION_WIFI:
			　　　　　　　　　　　break;　　　　
		case plus.networkinfo.CONNECTION_CELL2G:
			　　　　
		case plus.networkinfo.CONNECTION_CELL3G:
			　　　　
		case plus.networkinfo.CONNECTION_CELL4G:
			　　　　　　　　　　　break;　　　　
		default:
			　　　　　　mui.toast("当前没有网络");　　　　　　
			break;　　
	}
}
Date.prototype.format = function(format) {
       var date = {
              "M+": this.getMonth() + 1,
              "d+": this.getDate(),
              "h+": this.getHours(),
              "m+": this.getMinutes(),
              "s+": this.getSeconds(),
              "q+": Math.floor((this.getMonth() + 3) / 3),
              "S+": this.getMilliseconds()
       };
       if (/(y+)/i.test(format)) {
              format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
       }
       for (var k in date) {
              if (new RegExp("(" + k + ")").test(format)) {
                     format = format.replace(RegExp.$1, RegExp.$1.length == 1
                            ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
              }
       }
       return format;
}