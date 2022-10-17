import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css']
})
export class ProdottiComponent implements OnInit {
  @Input()  nome?:string
  @Input() photo?:string
  @Input() category?:string
 
  constructor() { }

  ngOnInit(): void {
  }

}
