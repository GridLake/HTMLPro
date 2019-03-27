<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <!-- get방식, post방식 -->
    <!-- get방식 -->
    <!-- localhost/webPro/html/days03/ex11_ok.jsp
    ?
    id=kenik		id 속성값에 이름으로 전송
    &
    password=tiger
 -->
<%
	// JSP 페이지에 내장된 request 객체
	String id = request.getParameter("id");
	String password = request.getParameter("password");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
로그인 ID : <%= id %> <br>
로그인 PW : <%= password %> <br>
</body>
</html>