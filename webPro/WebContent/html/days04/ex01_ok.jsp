<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
  String uid = request.getParameter("uid");
  String password = request.getParameter("password");
%>    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
uid = <%= uid %><br>
password = <%= password %><br>
</body>
</html>