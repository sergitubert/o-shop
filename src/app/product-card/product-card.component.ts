import { ShoppingCartService } from './../shopping-cart.service';
import { Product } from './../models/product';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('product') product: Product;
  @Input('show-actions') showActions: boolean;
  @Input('shopping-cart') shoppingCart;
  constructor(private cartService: ShoppingCartService) {
    this.showActions = true;
   }

   addToCart() {
     this.cartService.addToCart(this.product);
   }

   removeFromCart() {
    this.cartService.removeFromCart(this.product);
   }

   getQuantity() {
     if (!this.shoppingCart) {
       return 0;
     }
     const item = this.shoppingCart.items[this.product.$key];
     return item ? item.quantity : 0;
   }

}
