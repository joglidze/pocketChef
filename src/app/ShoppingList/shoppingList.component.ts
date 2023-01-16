import { Component, OnInit } from '@angular/core';
import { Ingridients } from '../shared/ingridients.module';
import {  ShoppingListService } from './shoppingList.service';

@Component({
  selector: 'app-shoppingList',
  templateUrl: 'shoppingList.component.html',
  styleUrls: ['./shoppingList.component.css'],
  
})
export class ShoppingListComponent implements OnInit {
  ingridients: Ingridients[]
  constructor(private ing:ShoppingListService){

  }
  ngOnInit(): void {
    this.ingridients=this.ing.getIng()
  }

  onEditItem(id:number){
    this.ing.startedEditing.next(id); 
    
   }
}
