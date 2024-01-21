import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Customer } from './customer.entity';

@Controller('customers')
export class CustomerController {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  @Get()
  findAll(): Promise<Customer[]> {
    return this.customerRepository.find();
  }
}
