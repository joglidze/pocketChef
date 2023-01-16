import { Subject } from "rxjs/Subject";
import { Ingridients } from "../shared/ingridients.module";

export class ShoppingListService{
    IngridientsChanged=new Subject<Ingridients[]>()
    ingridients: Ingridients[] = [
        new Ingridients('Beef', 500),
        new Ingridients('pork',800)
    ];
    startedEditing= new Subject<number>()

    getIng(){
       return this.ingridients
        
    }
    getIngredient(index: number) {
        return this.ingridients[index];
      }
    addIngridient(ingridient:Ingridients){
        
        this.ingridients.push(ingridient);
        
    }
    addToShoppingList(listIng:Ingridients[]){
       
        this.ingridients.push(...listIng);
        this.IngridientsChanged.next(this.ingridients.slice())
    }

    ingridientForEdit(index:number,newIngredient:Ingridients){
        this.ingridients[index]=newIngredient;
        this.IngridientsChanged.next(this.ingridients.slice());
    }
    updateIng(index:number,newIng:Ingridients){
        this.ingridients[index]=newIng;
        
    }
    
}