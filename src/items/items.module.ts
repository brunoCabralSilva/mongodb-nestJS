import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { ItemsSchema } from './items.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'items', schema: ItemsSchema }]),
  ],
  providers: [ItemsService],
  controllers: [ItemsController],
})
export class ItemsModule {}
