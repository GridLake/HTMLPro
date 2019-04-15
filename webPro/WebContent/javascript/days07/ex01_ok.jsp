<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- 스크립트릿 -->
<%
  // fname = input name 속성값(fname)
  String fname = request.getParameter("fname");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%-- <%= %> : 표현식 --%>
서버로 전송된 name = <%= fname %>
</body>
</html>