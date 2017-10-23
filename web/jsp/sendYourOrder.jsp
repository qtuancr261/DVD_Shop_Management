<%-- 
    Document   : sendYourOrder
    Created on : Oct 23, 2017, 12:54:21 AM
    Author     : thieuquangtuan
--%>

<%@page import="myPackage.Product"%>
<%@page import="java.util.List"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.Connection"%>
<%@page import="java.text.NumberFormat" %>
<%@page import="java.text.DecimalFormat" %>
<%@page import="java.util.Locale" %>
<%@page import="myPackage.Cart" %>
<%@page contentType="application/json" pageEncoding="UTF-8"%>
<%
    String customerEmail = request.getParameter("customerEmail");
    String notification = Cart.orderYourWishProducts(customerEmail);
    out.print(notification);
    
%>
