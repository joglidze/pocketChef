import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Injectable()
export class RecipesResolverService implements Resolve<Recipe[]> {
    constructor(private dataStorageSrv:DataStorageService,private recipesSrv:RecipeService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const recipes = this.recipesSrv.getRecipe()
        if(recipes.length==0){
            return this.dataStorageSrv.fetchData()
        }else{
            return recipes
        }
        
    }
}
