import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  @MinLength(3)
  @MaxLength(255)
  firstName: string;

  @IsString()
  @MinLength(3)
  @MaxLength(255)
  lastname: string;
}
