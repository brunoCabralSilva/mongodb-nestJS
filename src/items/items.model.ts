import * as mongoose from 'mongoose';

export const ItemsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
});

export interface Items {
  id: string;
  name: string;
  price: number;
  description: string;
}
