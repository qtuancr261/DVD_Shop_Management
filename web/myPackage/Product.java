/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package myPackage;

import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.text.NumberFormat;
import java.util.Locale;
/**
 *
 * @author thieuquangtuan
 */
public class Product
{
    private String id;
    private String name;
    private int price;
    private String type;
    private String IMG;
    private int theNumber;
    public Product(String id, int num)
    {
        this.id = id;
        theNumber = num;
        try
        {
            MySQL.startingConnect();
            MySQL.sqlStatement = MySQL.connection.createStatement();
            MySQL.result = MySQL.sqlStatement.executeQuery("select * from SANPHAM where MaSP='" + id + "'");
            while(MySQL.result.next())
            {
                name = MySQL.result.getString("TenSP");
                price = MySQL.result.getInt("GiaSP");
                type = MySQL.result.getString("DinhDangSP");
                IMG = MySQL.result.getString("imgSRC");
            }
        } catch (InstantiationException ex)
        {
            Logger.getLogger(Product.class.getName()).log(Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex)
        {
            Logger.getLogger(Product.class.getName()).log(Level.SEVERE, null, ex);
        } catch (SQLException ex)
        {
            Logger.getLogger(Product.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    public String getID()
    {
        return id;
    }
    public String getName()
    {
        return name;
    }
    public int getPrice()
    {
        return price;
    }
    public String getType()
    {
        return type;
    }
    public String getIMG()
    {
        return IMG;
    }
    public int getNum()
    {
        return theNumber;
    }
    public void setNum(int newValue)
    {
        theNumber = newValue;
    }
    public static String formattedPrice(int price)
    {
        NumberFormat priceFormat = NumberFormat.getCurrencyInstance(Locale.UK);
        int size = priceFormat.format(price).length();
        String formattedPrice = priceFormat.format(price).substring(1, size - 3) + " VNĐ";
        return formattedPrice.replace(',', '.');
    }
}
