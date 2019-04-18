/*
 * cookie.js
 */

 function setCookie(name, value, exdays) {
	 var now = new Date();
	 now.setDate(now.getDate() + exdays);
	 // now.setTime(now.getTime() + 1000 * 60 * 60 * 24 * exdays);  // ms
	 document.cookie = cname + "=" + escape(cvalue) + "; expires=" + now.toGMTString();
	 
	 // 기본 : path=~~~/days10/
	 // 모든 경로에서 쓰려면 => path=/
 }
 
 function getCookie(name) {
	 var cookies = document.cookie;
	 var clist = cookies.split("; ");
	 for (var i = 0; i < clist.length; i++) {
		 entry = clist[i];
		 var nv = entry.split("=");
		 if(nv[0] == name) {
			 return unescape(nv[1]);
		 }
	 }
	 return null;
 }
 
 function delCookie(name) {
	 if(!getCookie(name)) {     // null이 아닐 때만 제거 코딩 실행
		 var now = new Date();
		 now.setDate(now.getDate() - 1);
		 document.cookie = name + "=; expires=" + now.toGMTString();
	 }
 }