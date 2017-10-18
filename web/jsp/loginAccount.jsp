 <%-- 
    Document   : registerAccount
    Created on : Sep 21, 2017, 2:30:15 PM
    Author     : thieuquangtuan
--%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.SQLException"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.Connection"%>
<%@page import="java.util.*" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
    String emailKH = request.getParameter("userEmailLogin");
    String matkhauKH = request.getParameter("userPWDLogin");
    String matkhauKHDB = "";
    //Phải thêm thư viện MySQL vào project trước khi nạp Driver
    //Nạp Driver của MySQL
    Class.forName("com.mysql.jdbc.Driver").newInstance();
    //Thiết lập kết nối với MySQL
    Connection con = DriverManager.getConnection(
            "jdbc:mysql://localhost:3306/CUAHANG_BANGDIA?useUnicode=true&characterEncoding=utf8", "root", "thematrix141");
    //Tạo ra đối tượng thực thi các câu lệnh SQL
    Statement stm = con.createStatement();
    String queryStm = String.format("select * from KHACHHANG where EmailKH='%s' and PasswordKH='%s'", emailKH, matkhauKH);
    //out.print(queryStm);
    ResultSet record = stm.executeQuery(queryStm);
    if (record.next())
    {
        response.sendRedirect("../index.html");
    } else
    {
        out.print("ERORR");
    }
    record.close();
%>

