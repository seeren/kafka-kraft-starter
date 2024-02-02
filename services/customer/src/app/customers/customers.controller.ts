import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { InsertResult } from 'typeorm';

import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dtos/create-customer.dto';

@Controller()
export class CustomersController {
  constructor(private readonly customerService: CustomerService) {}

  @MessagePattern('kafka-karft-starter.customers.1.0.action.create')
  create(
    @Payload() createCustomerDto: CreateCustomerDto,
  ): Promise<InsertResult> {
    console.log('NNN');

    return this.customerService.createCustomer(createCustomerDto);
  }
}
