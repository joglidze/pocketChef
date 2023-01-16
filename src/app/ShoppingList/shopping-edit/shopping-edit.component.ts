import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Ingridients } from 'src/app/shared/ingridients.module';
import { ShoppingListService } from '../shoppingList.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  @ViewChild('f',{static:false}) slForm:NgForm
    subscription:Subscription;
    editMode=false;
    editedtId:number;
    editedIngr:Ingridients
  
  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
   this.subscription= this.slService.startedEditing.subscribe((id:number)=>{
    this.editedtId=id;
      this.editMode=true;
   this.editedIngr= this.slService.getIngredient(id);
   this.slForm.setValue({
    name:this.editedIngr.name,
    amount:this.editedIngr.amount
   })
   
   });
    
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  addItem(form:NgForm){
    console.log(form.value);
    const value=form.value
   const newIngridient =  new Ingridients(value.name, value.amount)
      
    this.slService.addIngridient(newIngridient)
  this.editMode = false;
    form.reset()
  }

  clearList(){
    this.slForm.reset();
    this.editMode=false
  }
  deleteItemList(){
    
      this.slService.ingridients.splice(this.editedtId,1);
      this.editMode=false
     
    
 
  }

}
