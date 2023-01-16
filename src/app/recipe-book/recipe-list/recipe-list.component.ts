import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs-compat';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  recipes: Recipe[];

  constructor(
    private recipe: RecipeService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscription = this.recipe.recipeChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
        
      }
    );
    this.recipes = this.recipe.getRecipe();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

 
  onNewPage() {
    this.router.navigate(['new'], { relativeTo: this.activeRoute }),
      this.router;
  }
}
