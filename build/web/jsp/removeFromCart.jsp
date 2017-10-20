<%-- 
    Document   : removeFromCart
    Created on : Oct 20, 2017, 11:13:25 PM
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
    Cart.removeProductFromCart(productID);
    /*String currentCart = "";
    for(Product currentProduct : Cart.getWishProducts().values())
    {
        currentCart += currentProduct.getID()+ " -> " + currentProduct.getName() + " -> " + currentProduct.getNum() + "\n";
    }
    out.print(currentCart);*/
%>
