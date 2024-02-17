import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SharedModule } from '../shared/shared.module';
import { CustomerController } from './customer.controller';
import { Customer } from './customer.entity';
import { CreateCustomerHandler } from './handlers/create-customer.handler';
import { CustomerByIdHandler } from './handlers/customer-by-id.handler';

@Module({
  imports: [SharedModule, TypeOrmModule.forFeature([Customer])],
  controllers: [CustomerController],
  providers: [CreateCustomerHandler, CustomerByIdHandler],
})
export class CustomersModule {}
