import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products, Product} from '../products'

@Component({
  selector: 'app-by-using',
  templateUrl: './by-using.component.html',
  styleUrls: ['./by-using.component.css']
})
export class ByUsingComponent {
  product: Product | undefined;
  sortedProduct: Product[];
  img:string;

  constructor(private route: ActivatedRoute) {
    this.sortedProduct = []
    this.img = ''
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = String(routeParams.get('productSortType'));
    this.product = products.find(product => product.sortType === productIdFromRoute);

    products.forEach(item => {
      if(item.sortType === this.product?.sortType ){
        this.sortedProduct.push(item)
      }
    });
    // this.img = "assets/" + this.product?.id + ".jpg";
    console.log(this.sortedProduct)
  }

}
