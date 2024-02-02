import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SharedModule } from '../shared/shared.module';
import { Customer } from './customer.entity';
import { CustomerService } from './customer.service';
import { CustomersController } from './customers.controller';
import { CreateCustomerHandler } from './handlers/create-customer.handler';

@Module({
  imports: [SharedModule, TypeOrmModule.forFeature([Customer])],
  controllers: [CustomersController],
  providers: [CustomerService, CreateCustomerHandler],
})
export class CustomersModule {}
