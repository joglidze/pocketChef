import { Ingridients } from "../shared/ingridients.module";

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingridients:Ingridients[]

  constructor(name:string, desc:string,imagePath:string,ingridients:Ingridients[]){
    this.name=name;
    this.description=desc;
    this.imagePath=imagePath;
    this.ingridients=ingridients

  }
}
