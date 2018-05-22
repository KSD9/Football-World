import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../core/services/recipe/recipe.service';
import { RecipeViewModel } from '../../core/models/recipe-view-model.module';

@Component({
  selector: 'app-italian-foods',
  templateUrl: './italian-foods.component.html',
  styleUrls: ['./italian-foods.component.css']
})
export class ItalianFoodsComponent implements OnInit {
  recipes: RecipeViewModel[];
  constructor(private recipeService: RecipeService) {
    this.recipes = recipeService.takeAllItalians();
  }

  ngOnInit() {
  }

}
