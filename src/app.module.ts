import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ItemsModule,
    MongooseModule.forRoot('mongodb://localhost/commerce'),
  ],
})
export class AppModule {}
