<%-- 
    Document   : loadCurrentProductInfo
    Created on : Oct 16, 2017, 4:44:33 PM
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
<%@page contentType="application/json" pageEncoding="UTF-8"%>
<%
    //Phải thêm thư viện MySQL vào project trước khi nạp Driver
    //Nạp Driver của MySQL
    String productID = request.getParameter("id");
    Class.forName("com.mysql.jdbc.Driver").newInstance();
    //Thiết lập kết nối với MySQL
    Connection con = DriverManager.getConnection(
            "jdbc:mysql://localhost:3306/CUAHANG_BANGDIA?useUnicode=true&characterEncoding=utf8", "root", "thematrix141");
    //Tạo ra đối tượng thực thi các câu lệnh SQL
    Statement stm = con.createStatement();
    ResultSet result;
    String sqlCommand = String.format("select TenSP,GiaSP,NSX,DinhDangSP,MoTaSP,imgSRC from SANPHAM where MaSP='%s'", productID);
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
        NumberFormat priceFormat = NumberFormat.getCurrencyInstance(Locale.UK);
        int price = result.getInt("GiaSP");
        String formattedPrice = priceFormat.format(price).substring(1) + " VNĐ";

        s += "{\"TenSP\":\"" + result.getString("TenSP") + "\","
                + "\"GiaSP\":\"" + formattedPrice + "\","
                + "\"NSX\":\"" + result.getString("NSX") + "\","
                + "\"DinhDangSP\":\"" + result.getString("DinhDangSP") + "\","
                + "\"MoTaSP\":\"" + result.getString("MoTaSP") + "\","
                + "\"imgSRC\":\"" + result.getString("imgSRC").replaceAll("small", "medium") + "\"},";
    } while (result.next());
    s = s.substring(0, s.length() - 1);
    s += "]";
    result.close();
    out.print(s);//goi cho browser chuoi json
%>
