/**
 *  1. <script></script>
 *  2. 외부스크립트파일.js
 *      <script src="외부스크립트파일.js">
 *      <script src="외부스크립트파일.js">
 *      <script src="외부스크립트파일.js">
 *  3. 장점
 *    ㄱ. html과 js 코드를 분리 -> 유지,보수 용이    
 *    ㄴ. 캐시 된 javascript 파일로 인해 처리 성능 향상. 
 */

function btn_click(){
	var msg = document.getElementById("msg").value;
	document.getElementById("demo").innerHTML= msg;
}