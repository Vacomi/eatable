import { Injectable } from '@angular/core';
import { Product } from '../Models/Producto.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor() { }

  getProductCart(): Product[] {
    let productsCart: Product[] =
     JSON.parse(localStorage.getItem('cart')!)
    console.log(productsCart);
    
    return productsCart;
  }

  addProductCart(plato: Product){
    if (this.isItemAddedToCart(plato._id)){
      return
    }
    console.log('Añadiendo plato desde el servicioz');
    
    let cartItems = JSON.parse(localStorage.getItem("cart")!) || [];

    cartItems.push({...plato, quantity: 1})
    // cartItems.push(plato);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  } 

  deleteProductCart(id: String){
    let cartItems = JSON.parse(localStorage.getItem("cart")!)
    cartItems = cartItems.filter((item: Product) => item._id !== id)
    localStorage.setItem("cart", JSON.stringify(cartItems))
  }

  updateCart(cart: Product[]){
    localStorage.setItem("cart", JSON.stringify(cart))
  }

  getTotal(){
    let cartItems = JSON.parse(localStorage.getItem("cart")!)
    return cartItems.reduce((acc: number, cur: Product) => acc + (cur.price * (cur.quantity || 0)), 0)
  }

  isItemAddedToCart(id: String | undefined){
    let cartItems = JSON.parse(localStorage.getItem("cart")!)
    return (cartItems?.filter((item: Product) => item._id === id).length > 0);
  }


}
