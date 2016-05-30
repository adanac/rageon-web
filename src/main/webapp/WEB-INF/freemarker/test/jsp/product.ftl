<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="com.adanac.tool.rageon.test.Product" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>

    <a href="${pageContext.request.contextPath}/jsp/product_details.jsp?id=<%=product.getId()%>">Details</a>
	<a href="${pageContext.request.contextPath}/jsp/shopping_cart.jsp">Shopping Cart</a>
</body>
</html>