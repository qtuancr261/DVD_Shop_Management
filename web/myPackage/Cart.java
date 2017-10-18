/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package myPackage;

import java.util.ArrayList;
/**
 *
 * @author thieuquangtuan
 */
public class Cart
{
    private static ArrayList<Product> wishProducts = new ArrayList<>();
    public Cart()
    {
        
    }
    public static void addProductToCart(Product newProduct)
    {
        wishProducts.add(newProduct);
    }
    public static ArrayList<Product> getWishProducts()
    {
        return wishProducts;
    }
}
