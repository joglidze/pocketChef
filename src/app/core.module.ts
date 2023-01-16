import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { RecipeService } from './recipe-book/recipe.service';
import { RecipesResolverService } from './recipe-book/recipes-resolver.service';
import { DataStorageService } from './shared/data-storage.service';
import { ShoppingListService } from './ShoppingList/shoppingList.service';

@NgModule({
    providers: [
        ShoppingListService,
        RecipeService,
        DataStorageService,
        RecipesResolverService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptorService,
          multi: true,
        },
      ],
})

export class CoreModule{}
