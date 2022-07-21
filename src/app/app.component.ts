import {Component, OnInit} from '@angular/core';
import { IProduct } from './models/product';
import {ProductsService} from './services/products.service';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular14';

  public productsList: IProduct[] = [];
  public loading = false;
  public products$: Observable<IProduct[]>;
  public term = '';

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.products$ = this.productsService.getAllProducts()
      .pipe(
        tap(_ => this.loading = false)
      );
    // this.productsService.getAllProducts().subscribe(products => {
    //   this.productsList = products;
    //   this.loading = false;
    // })
  }

}
