import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  public form = new FormGroup({
    title: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  public submit(): void {

  }


}
