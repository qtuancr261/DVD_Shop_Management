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
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
    String tenKH = request.getParameter("userName");
    String emailKH = request.getParameter("userEmail");
    String matkhauKH = request.getParameter("userPWD");
    String sodtKH = request.getParameter("userPhone");
    String diachiKH = request.getParameter("userAddress");
    int userId = 1;
    //Phải thêm thư viện MySQL vào project trước khi nạp Driver
    //Nạp Driver của MySQL
    Class.forName("com.mysql.jdbc.Driver").newInstance();
    //Thiết lập kết nối với MySQL
    Connection con = DriverManager.getConnection(
            "jdbc:mysql://localhost:3306/CUAHANG_BANGDIA?useUnicode=true&characterEncoding=utf8", "root", "thematrix141");
    //Tạo ra đối tượng thực thi các câu lệnh SQL
    Statement stm = con.createStatement();
    ResultSet record = stm.executeQuery("select count(MaKH) from KHACHHANG");
    while(record.next())
    {
        userId = record.getInt(1) + 1;
    }
    //Tạo câu lệnh để thêm dữ liệu vào DB 
    String sql = "insert into KHACHHANG values(" + userId + ",'"+ tenKH + "','" + sodtKH + "','" + diachiKH + "','" + emailKH + "','" + matkhauKH + "')";
    String thongbao = "OK";
    try
    {
        stm.executeUpdate(sql); //thuc thi cau lenh sql
    } catch (SQLException ex)
    {
        thongbao = "ERROR";
    }
    out.print(thongbao);
%>
