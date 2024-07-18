import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "./categories.entity";
import { Repository } from "typeorm";
import * as data from "../utils/seeds.json"


@Injectable()
export class CategoriesRepository{
    constructor(
        @InjectRepository(Category) 
        private readonly categoriesRepository : Repository <Category>
    ){}

    async getCategories(){
        return this.categoriesRepository.find();
    }

    async addCategories(){
        data?.map( async (element)=>{
            await this.categoriesRepository
            .createQueryBuilder()
            .insert()
            .into(Category)
            .values({name: element.category})
            .orIgnore()
            .execute();
        });
        return 'Categorías creadas'
    }
}