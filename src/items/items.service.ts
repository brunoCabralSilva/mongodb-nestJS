import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Items } from './items.model';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel('items') private readonly itemsModel: Model<Items>,
  ) {}

  public async findItem(name: string, price: number) {
    const findProduct = await this.itemsModel.findOne(
      { name: name },
      { price: price },
    );
    return findProduct;
  }

  public async getAll() {
    return this.itemsModel.find();
  }

  public async insertOne(name: string, description: string, price: number) {
    const newProduct = new this.itemsModel({ name, description, price });
    if ((await this.findItem(name, price)) === null) {
      const result = newProduct.save();
      return result;
    }
    throw new HttpException(
      'Já existe um item cadastrado com este nome e preço',
      400,
    );
  }

  public async findById(_id: string) {
    try {
      const findProduct = await this.itemsModel.findOne({ _id });
      return findProduct;
    } catch (e) {
      throw new HttpException('Item não encontrado', 400);
    }
  }

  public async updateOne(
    id: string,
    name: string,
    description: string,
    price: number,
  ) {
    const itemUpdate = await this.findById(id);
    if (itemUpdate !== null) {
      itemUpdate.name = name;
      itemUpdate.description = description;
      itemUpdate.price = price;
      itemUpdate.save();
      return itemUpdate;
    }
    throw new HttpException('Item não encontrado', 400);
  }

  public async removeOne(id: string) {
    const itemUpdate = await this.findById(id);
    if (itemUpdate !== null) {
      try {
        this.itemsModel.deleteOne({ _id: id }).exec();
        return { message: `Item de id ${id} removido com sucesso` };
      } catch (e) {
        throw new HttpException(
          `Não foi possível remover o item: ${e.message}`,
          400,
        );
      }
    }
    throw new HttpException('Item não encontrado', 400);
  }
}
