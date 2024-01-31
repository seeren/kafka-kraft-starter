import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SharedModule } from '../shared/shared.module';
import { Customer } from './customer.entity';
import { CustomersController } from './customers.controller';

@Module({
  imports: [SharedModule, TypeOrmModule.forFeature([Customer])],
  controllers: [CustomersController],
})
export class CustomersModule {}
