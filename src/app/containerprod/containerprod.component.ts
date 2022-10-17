import { Component, OnInit } from '@angular/core';
import { Product } from '../dati/product.data';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-containerprod',
  templateUrl: './containerprod.component.html',
  styleUrls: ['./containerprod.component.css']
})
export class ContainerprodComponent implements OnInit {

  prodotti?:Product[]= []
  
  
  constructor(private prodottoService :ProductService) { 
    this.prodotti = this.prodottoService.prodotti
  }

  ngOnInit(): void {
  }

}
