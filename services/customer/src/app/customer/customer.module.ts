import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SharedModule } from './../shared/shared.module';
import { CustomerController } from './customer.controller';
import { Customer } from './customer.entity';

@Module({
  imports: [SharedModule, TypeOrmModule.forFeature([Customer])],
  controllers: [CustomerController],
})
export class CustomerModule {}
