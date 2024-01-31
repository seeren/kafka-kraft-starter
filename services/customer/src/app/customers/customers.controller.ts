import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Customer } from './customer.entity';

@Controller()
export class CustomersController {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  @MessagePattern('kafka-karft-starter.customers.1.0.action.create')
  findAll(): void {}
}
