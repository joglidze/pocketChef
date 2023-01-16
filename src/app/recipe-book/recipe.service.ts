import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingridients } from "../shared/ingridients.module";
import { ShoppingListService } from "../ShoppingList/shoppingList.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();
    recipeChanged =new Subject<Recipe[]>()
    recipes: Recipe[] = [
        // new Recipe(
        //   'Burger',
        //   'Burger with beef',
        //   'https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/master/pass/Smashburger-recipe-120219.jpg',
        // [
        //     new Ingridients('beef',500),
        //     new Ingridients('fries',100)
        //   ]
        // ),
        // new Recipe(
        //   'Spaghetti',
        //   'tasty spaghetti',
        //   'https://www.thespruceeats.com/thmb/8iAri1JnU2CKFqAW1ZCEKi9lcsg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/skillet-spaghetti-481948-final-hero-01-340363d6ed1c402a9a10b0a176e2a649.jpg',
        // [
        //     new Ingridients('jar pasta sauce (ounce)',28),
        //     new Ingridients('box spaghetti',300)
        //   ]
        // ),
        // new Recipe(
        //   'Pizza',
        //   'tasty pizza',
        //   'https://www.simplyrecipes.com/thmb/pjYMLcsKHkr8D8tYixmaFNxppPw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg',
        // [
        //     new Ingridients('pizza dough (ounces)',16),
        //     new Ingridients('peperoni slice',18)
        //   ]
        // ),
        // new Recipe(
        //   'Taco',
        //   'Keto Taco',
        //   'https://img.taste.com.au/w_-0kcUJ/taste/2016/11/aussie-style-beef-and-salad-tacos-86525-1.jpeg',
        //   [
        //     new Ingridients('meat',300),
        //     new Ingridients('taco Shell',10)
        //   ]
        // )
      ];
      constructor(private shoppinListSrv:ShoppingListService){

      }

      // test(test1){
      //   console.log(test1.value.ingredients[0]);
      //   console.log(this.recipes[4]);
      //    this.recipes.push(new Recipe(test1.value.name,test1.value.description,test1.value.imagePath,[new Ingridients('meat',300)] ) )
      //    console.log(this.recipes);
      // }



      setReciper(recipe:Recipe[]){
        this.recipes=recipe;
        this.recipeChanged.next(this.recipes.slice())
      }


      getRecipe(){
        return this.recipes.slice()
      }
      getRecipes(id:number){
        return this.recipes[id]
      }
      addIngToShopping(ingridient:Ingridients[]){
          this.shoppinListSrv.addToShoppingList(ingridient)
      }
      
      addRecipe(recipeName:string,recipeDesc:string,recipeImg:string,recipeIngr:any){
          this.recipes.push(new Recipe(recipeName,recipeDesc,recipeImg, recipeIngr) )
          
          this.recipeChanged.next(this.recipes.slice())
      }

      updateRecipe(index:number,newRecipe:Recipe){
          this.recipes[index]=newRecipe;
          console.log(this.recipes[index]);
          this.recipeChanged.next(this.recipes.slice())
      }

      deleteRec(index:number){

        this.recipes.splice(index,1);
        this.recipeChanged.next(this.recipes.slice())

      }
      addingList(array:any){
       console.log(this.recipes) 
      }
}