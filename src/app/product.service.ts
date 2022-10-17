import { Injectable } from '@angular/core';
import { Product } from './dati/product.data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _product : Product[] = [
    {code:"001", name:"Air force 1 x supreme", category:"scarpe", photo:"", price:"250", slug:"Air-force-1-sup"},
    {code:"002", name:"Air force 1 white", category:"scarpe", photo:"", price:"115", slug:"Air-force-white"},
    {code:"003", name:"Jordan 1 High Chicago", category:"scarpe", photo:"", price:"250", slug:"J1-Chicago"},
    {code:"004", name:"Jordan 1 Retro High x Travis Scott", category:"scarpe", photo:"", price:"750", slug:"J1-Travis"},
    {code:"005", name:"Jordan 4 military black", category:"scarpe", photo:"", price:"250", slug:"J4-mb"},
    {code:"006", name:"Yeezy Boost 350 v2 Zebra", category:"scarpe", photo:"", price:"250", slug:"Yeezy-Zebra"},

  ]
  
  constructor() { }
}
