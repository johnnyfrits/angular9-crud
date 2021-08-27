import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})

export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0
  }

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {

  }

  createProduct(): void {

    this.productService.create(this.product).subscribe(() => {

      this.productService.showMessage("Produto cadastrado!");

      this.cancel();
    });

  }

  cancel(): void {

    this.router.navigate(['/products']);
  }
}
