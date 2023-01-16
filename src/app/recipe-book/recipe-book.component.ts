import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
  
})
export class RecipeBookComponent implements OnInit,AfterContentChecked {
  finalItem:Recipe;
  constructor(private recipeService:RecipeService,private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe:Recipe)=>{this.finalItem =recipe
      
    })
  }
ngAfterContentChecked(): void {
 
}
 
}
