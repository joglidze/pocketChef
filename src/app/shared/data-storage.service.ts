import { HttpClient, HttpParams } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { exhaustMap, map, take, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { Recipe } from '../recipe-book/recipe.model';
import { RecipeService } from '../recipe-book/recipe.service';

@Injectable()
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeSrv: RecipeService,
    private authService: AuthService
  ) {}
  saveData() {
    const recipes = this.recipeSrv.getRecipe();
    return this.http
      .put(
        'https://ng-recipe-api-1af26-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
  fetchData() {
  
        return this.http.get<Recipe[]>(
          'https://ng-recipe-api-1af26-default-rtdb.firebaseio.com/recipes.json',
         
        ).pipe(
      map((recipes) => {
        return recipes.map((recipes) => {
          return {
            ...recipes,
            ingridients: recipes.ingridients ? recipes.ingridients : [],
          };
        });
      }),
      tap((recipes) => {
        this.recipeSrv.setReciper(recipes);
      })
    );
  }
}
