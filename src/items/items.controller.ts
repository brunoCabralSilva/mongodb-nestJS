import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { DataItems } from './items.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async getAll() {
    return this.itemsService.getAll();
  }

  @Post()
  async insertOne(@Body() body: DataItems) {
    const { name, description, price } = body;
    return this.itemsService.insertOne(name, description, price);
  }

  @Patch(':id')
  async updateOne(@Body() body: DataItems, @Param('id') id: string) {
    const { name, description, price } = body;
    return this.itemsService.updateOne(id, name, description, price);
  }

  @Delete(':id')
  async removeOne(@Param('id') id: string) {
    return this.itemsService.removeOne(id);
  }
}
