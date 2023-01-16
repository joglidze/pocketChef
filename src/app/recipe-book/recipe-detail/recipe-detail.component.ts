import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  product: Recipe;
  id: number;
  constructor(
    private recipeSrc: RecipeService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.product = this.recipeSrc.getRecipes(this.id);
    });
  }
  addShopping() {
    this.recipeSrc.addIngToShopping(this.product.ingridients);
    console.log(this.product.ingridients);
  }

  editPage() {
    this.router.navigate(['edit'], { relativeTo: this.activeRoute });
  }
  onDelete() {
    this.recipeSrc.deleteRec(this.id);
    this.router.navigate(['/recipe']);
  }
}
