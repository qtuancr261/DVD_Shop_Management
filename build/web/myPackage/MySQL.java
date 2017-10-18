/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package myPackage;
import java.sql.DriverManager;
import java.sql.Connection;
import java.sql.Statement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
/**
 *
 * @author thieuquangtuan
 */
public class MySQL
{
    public static void startingConnect() throws InstantiationException, IllegalAccessException, SQLException
    {
        try
        {
            Class.forName("com.mysql.jdbc.Driver").newInstance();
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/CUAHANG_BANGDIA?useUnicode=true&characterEncoding=utf8", "root", "thematrix141");
        } catch (ClassNotFoundException ex)
        {
            Logger.getLogger(MySQL.class.getName()).log(Level.SEVERE, null, ex);
        }
        
    }
    public static Connection connection;
    public static ResultSet result;
    public static Statement sqlStatement;
}
