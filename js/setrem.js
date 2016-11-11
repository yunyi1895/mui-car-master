var deviceWidth = document.documentElement.clientWidth;
//alert(deviceWidth)
if(deviceWidth >640){
	deviceWidth = 640;
}


document.documentElement.style.fontSize = deviceWidth / 6.4*2 + 'px';
//(function() {
//  var b = navigator.userAgent;
//  ipad = b.match(/(iPad).*OS\s([\d_]+)/) ? true : false;
//  iphone = !ipad && b.match(/(iPhone\sOS)\s([\d_]+)/) ? true : false;
//  uc = navigator.userAgent.indexOf("UCBrowser") > -1 ? true : false;
//  ios = ipad || iphone;
//  var d = 1,a = 1,c;
//  if (ios) {
//      if (window.devicePixelRatio >= 2) {
//          d *= 0.5;
//          a *= 2
//      }
//  } else {
//      if (uc) {
//          if (window.devicePixelRatio >= 2) {
//              d *= 0.5;
//              a *= 2
//          }
//      }
//  }
//  c = '<meta name="viewport" content="initial-scale=' + d + ", maximum-scale=" + d + ", minimum-scale=" + d + ', width=device-width, user-scalable=no" />';
//  document.write(c);
//  alert(a)
//  document.documentElement.style.fontSize = 100 * a + "px"
//})();
