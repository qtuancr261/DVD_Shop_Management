<%-- 
    Document   : loadCurrentUserInfo
    Created on : Oct 22, 2017, 11:36:57 PM
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
<%@page import="myPackage.Product" %>
<%@page contentType="application/json" pageEncoding="UTF-8"%>
<%
    //Phải thêm thư viện MySQL vào project trước khi nạp Driver
    //Nạp Driver của MySQL
    String userEmail = request.getParameter("userEmail");
    Class.forName("com.mysql.jdbc.Driver").newInstance();
    //Thiết lập kết nối với MySQL
    Connection con = DriverManager.getConnection(
            "jdbc:mysql://localhost:3306/CUAHANG_BANGDIA?useUnicode=true&characterEncoding=utf8", "root", "thematrix141");
    //Tạo ra đối tượng thực thi các câu lệnh SQL
    Statement stm = con.createStatement();
    ResultSet result;
    String sqlCommand = String.format("SELECT HoTenKH,SodtKH,DiaChiKH,EmailKH from CUAHANG_BANGDIA.KHACHHANG where EmailKH ='%s'", userEmail);
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
        s += "{\"HoTenKH\":\"" + result.getString("HoTenKH") + "\","
                + "\"SodtKH\":\"" + result.getInt("SodtKH") + "\","
                + "\"DiaChiKH\":\"" + result.getString("DiaChiKH") + "\","
                + "\"EmailKH\":\"" + result.getString("EmailKH") + "\"}]";
    } while (result.next());
    result.close();
    out.print(s);//goi cho browser chuoi json
%>
