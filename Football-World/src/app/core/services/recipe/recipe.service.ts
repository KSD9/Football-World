import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { RecipeViewModel } from '../../models/recipe-view-model.module';

@Injectable()
export class RecipeService {

  constructor() { }

  takeAllItalians() {
    const recipies: RecipeViewModel[] = [
      {
        Id: 'some-cool-id-b00cd6e8e859',
        Title: 'Caprese Salad with Pesto Sauce',
        Description: 'Juicy tomatoes and mozzarella cheese salad topped with freshly made pesto sauce.',
        Author: 'Chef Joey Matthew',
        ImgSrc: 'https://i.ndtvimg.com/i/2017-09/caprese-salad_625x350_51506417724.jpg'
      },
      {
        Id: 'some-cool-id--abafc8727501',
        Title: 'Pasta Carbonara',
        Description: "The original recipe calls for guanciale, which is pig's cheek, but since its not easily available, the chef has used bacon instead.",
        Author: 'Chef Ritu Dalmia',
        ImgSrc: 'https://i.ndtvimg.com/i/2017-09/pasta-carbonara_600x300_41506417953.jpg'
      },
      {
        Id: 'some-cool-id-859',
        Title: 'Mushroom Risotto',
        Description: 'A plateful of buttery risotto with the goodness of mushrooms. Great to feed a hungry horde!',
        Author: 'Chef Divya Burman',
        ImgSrc: 'https://i.ndtvimg.com/i/2017-09/risotto_625x350_81506418041.jpg'
      },
      {
        Id: 'some-cool-id-8727501',
        Title: "Tiramisu - The 'pick-me-up' cake",
        Description: "The delightful tiramisu recipe with sponge fingers soaked in coffee, layered around and smeared with a creamy mascarpone mixture. The word 'tiramisu' in Italian means 'pick-me-up'. Owing to its caffeine kick it sure does!",
        Author: 'Chef Ritu Dalmia',
        ImgSrc: 'https://i.ndtvimg.com/i/2017-09/tiramisu-the-pick-me-up-cake_625x350_81506418133.jpg'
      }
    ];
    return recipies;
  }
}
