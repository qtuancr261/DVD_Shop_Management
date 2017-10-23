<%-- 
    Document   : loadSameCategoryProduct
    Created on : Oct 23, 2017, 10:26:27 PM
    Author     : thieuquangtuan
--%>

<%@page import="java.util.List"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.Connection"%>
<%@page import="java.text.NumberFormat" %>
<%@page import="java.text.DecimalFormat" %>
<%@page import="java.util.Locale" %>
<%@page import="myPackage.Product"%>
<%@page contentType="application/json" pageEncoding="UTF-8"%>
<%
    //Phải thêm thư viện MySQL vào project trước khi nạp Driver
    //Nạp Driver của MySQL
    String productType = request.getParameter("type");
    String exceptionID = request.getParameter("exception");
    Class.forName("com.mysql.jdbc.Driver").newInstance();
    //Thiết lập kết nối với MySQL
    Connection con = DriverManager.getConnection(
            "jdbc:mysql://localhost:3306/CUAHANG_BANGDIA?useUnicode=true&characterEncoding=utf8", "root", "thematrix141");
    //Tạo ra đối tượng thực thi các câu lệnh SQL
    Statement stm = con.createStatement();
    ResultSet result;
    String sqlCommand = String.format("select TenSP,MaSP,GiaSP,imgSRC from SANPHAM where MaSP like '%%%s%%' and MaSP not like '%%%s%%'", productType, exceptionID);
    result = stm.executeQuery(sqlCommand);
    if (!result.next())
    {
        out.print("empty");
        return;
    }
    // Make JSON
    String s = "[";
    do
    {
        // Convert Money
        s += "{\"TenSP\":\"" + result.getString("TenSP") + "\","
                + "\"MaSP\":\"" + result.getString("MaSP") + "\","
                + "\"GiaSP\":\"" + Product.formattedPrice(result.getInt("GiaSP")) + "\","
                + "\"imgSRC\":\"" + result.getString("imgSRC") + "\"},";
    } while (result.next());
    s = s.substring(0, s.length() - 1);
    s += "]";
    result.close();
    out.print(s);//goi cho browser chuoi json
%>
