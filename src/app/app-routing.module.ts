import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RecipeBookModule } from './recipe-book/recipe-book.module';
const pageRoutes: any = [
  {
    path: '',
    redirectTo: '/recipe',
    pathMatch: 'full',
  },
  {
    path: 'recipe',
    loadChildren: () =>
      import('./recipe-book/recipe-book.module').then(
        (m) => m.RecipeBookModule
      ),
  },

  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'shoppingList',
    loadChildren: () =>
      import('./ShoppingList/shoppingList.module').then(
        (m) => m.ShoppingListModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(pageRoutes, { preloadingStrategy: PreloadAllModules }),
  ],

  exports: [RouterModule],
})
export class Approuting {}
