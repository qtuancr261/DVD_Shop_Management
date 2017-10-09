<%-- 
    Document   : loadHotSaleProduct
    Created on : Oct 9, 2017, 2:50:29 PM
    Author     : thieuquangtuan
--%>
<%@page import="java.util.List"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.Connection"%>
<%@page contentType="application/json" pageEncoding="UTF-8"%>
<%  
    //Phải thêm thư viện MySQL vào project trước khi nạp Driver
    //Nạp Driver của MySQL
    String exp = request.getParameter("type");
    Class.forName("com.mysql.jdbc.Driver").newInstance();
    //Thiết lập kết nối với MySQL
    Connection con = DriverManager.getConnection(
            "jdbc:mysql://localhost:3306/CUAHANG_BANGDIA?useUnicode=true&characterEncoding=utf8", "root", "thematrix141");
    //Tạo ra đối tượng thực thi các câu lệnh SQL
    Statement stm = con.createStatement();
    ResultSet rs = stm.executeQuery("select * from SANPHAM");
    if(!rs.next()){
        out.print("empty");
        return;
    }
    String s = "[";
    do {
        s += "{\"TenSP\":\"" + rs.getString("TenSP") + "\","
                + "\"GiaSP\":\"" + rs.getInt("GiaSP") + "\","
         + "\"imgSRC\":\"" + rs.getString("imgSRC") + "\"},";       
    }while(rs.next()) ;
    s = s.substring(0, s.length() - 1);
    s += "]";
    rs.close();
    out.print(s);//goi cho browser chuoi json
%>
