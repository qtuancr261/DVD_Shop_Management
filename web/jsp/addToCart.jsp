<%-- 
    Document   : addToCart
    Created on : Oct 17, 2017, 11:07:47 PM
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
    String productID = request.getParameter("id");
    int num = Integer.parseInt(request.getParameter("num"));        
    Cart.addProductToCart(productID, num);
    out.print(Cart.getWishProducts().size());
    /*String currentCart = "";
    for(Product currentProduct : Cart.getWishProducts().values())
    {
        currentCart += currentProduct.getID()+ " -> " + currentProduct.getName() + " -> " + currentProduct.getNum() + "\n";
    }
    out.print(currentCart);*/
%>