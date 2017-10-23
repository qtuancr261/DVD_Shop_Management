<%-- 
    Document   : previewCart
    Created on : Oct 22, 2017, 3:43:36 PM
    Author     : thieuquangtuan
--%>
<%@page import="java.util.Map"%>
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
<%@page import="myPackage.Product" %>
<%@page contentType="application/json" pageEncoding="UTF-8"%>
<%
    Map<String, Product> wishList = Cart.getWishProducts();
    if (wishList.size() == 0)
    {
        out.print("Giỏ hàng trống :3, hãy mua hàng đi người ơi");
        return;
    }
    // Make JSON
    int priceOfAll = 0;
    String s = "[";
    for (Product currentProduct : wishList.values())
    {
        s += "{\"TenSP\":\"" + currentProduct.getName() + "\","
                + "\"MaSP\":\"" + currentProduct.getID() + "\","
                + "\"GiaSP\":\"" + Product.formattedPrice(currentProduct.getPrice() * currentProduct.getNum()) + "\","
                + "\"DinhDangSP\":\"" + currentProduct.getType() + "\","
                + "\"SoLuongSP\":\"" + currentProduct.getNum() + "\"},";
        priceOfAll += currentProduct.getPrice()*currentProduct.getNum();
    }
    s+="{\"DonGia\":\"" + Product.formattedPrice(priceOfAll) + "\"}";
    //s = s.substring(0, s.length() - 1);
    s += "]";
    out.print(s);//goi cho browser chuoi json
%>
