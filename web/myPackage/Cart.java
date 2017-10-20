/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package myPackage;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
/**
 *
 * @author thieuquangtuan
 */
public class Cart
{
    //private static ArrayList<Product> wishProducts = new ArrayList<>();
    private static Map<String, Product> wishProducts = new HashMap<String, Product>();
    public Cart()
    {
        
    }
    public static void addProductToCart(String id, int num)
    {
        if (wishProducts.containsKey(id))
        {
            Product existProduct = wishProducts.get(id);
            existProduct.setNum(existProduct.getNum() + num);
        }
        else
            wishProducts.put(id, new Product(id, num));
    }
    public static void removeProductFromCart(String id)
    {
        if (wishProducts.containsKey(id))
        {
            wishProducts.remove(id);
        }
    }
    public static Map<String, Product> getWishProducts()
    {
        return wishProducts;
    }
}
