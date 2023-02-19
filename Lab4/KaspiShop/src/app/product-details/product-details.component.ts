import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products, Product} from '../products'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  product: Product | undefined;
  img:string;
  constructor(private route: ActivatedRoute) {
    this.img = '';
  }

  twitter = faTwitter

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.product = products.find(product => product.id === productIdFromRoute);
    this.img = "assets/" + this.product?.id + ".jpg";
  }

  shareClick(){
    
  }
}
