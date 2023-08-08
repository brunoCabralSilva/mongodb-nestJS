import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Length,
} from 'class-validator';

export class DataItems {
  @IsString()
  @IsNotEmpty()
  @Length(3, 20)
  name: string;

  @IsString()
  @IsNotEmpty()
  @Length(10, 100)
  description: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  price: number;
}
