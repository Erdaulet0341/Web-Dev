import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products, Product} from '../products'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  product: Product | undefined;
  img:string;
  likeNum:number
  constructor(private route: ActivatedRoute) {
    this.img = '';
    this.likeNum = 0;
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.product = products.find(product => product.id === productIdFromRoute);
    this.img = "assets/" + this.product?.id + ".jpg";
  }

  shareClick(link:string, name:string){
    console.log(link)
    window.open(`https://telegram.me/share/url?url=${link}&text=${name}`)
  }
  check:Boolean = true

  
  likeFun(like:number){
    let likeCnt = document.getElementById("likeCnt")
    let likeimg = document.getElementById("like")
    // let cnt:number = parseInt(likeCnt.innerText)+1
    // console.log("first "+this.check);
    if(likeCnt != null && likeimg!= null && this.check == true){
      let cnt:number = parseInt(likeCnt.innerText)+1
      console.log(cnt)
      likeimg.style.color = 'rgb(0, 145, 255)'
      likeCnt.innerHTML = cnt.toString()
      this.check = false
    }
    else if(likeCnt != null && likeimg!= null && this.check == false){
      let cnt:number = parseInt(likeCnt.innerText)-1;
      likeimg.style.color = 'black'
      this.check = true
      likeCnt.innerHTML = cnt.toString()
    }
    // console.log("second "+this.check);
  }

  delete(id: number){
    const el = document.getElementById('details');
    if(el!= null){
      el.style.display = 'none'
    }
    console.log(products)
    products.forEach((item, index) => {

      if(item.id === id){
        products.splice(index, 1)
        console.log(products)
      }
    });

  }
}
