import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { InsertResult } from 'typeorm';

import { CreateCustomerCommand } from './commands/create-customer.command';
import { CreateCustomerDto } from './dtos/create-customer.dto';

@Injectable()
export class CustomerService {
  constructor(private readonly commandBus: CommandBus) {}

  createCustomer(createCustomerDto: CreateCustomerDto): Promise<InsertResult> {
    return this.commandBus.execute<CreateCustomerCommand, InsertResult>(
      new CreateCustomerCommand(
        createCustomerDto.firstName,
        createCustomerDto.lastname,
      ),
    );
  }
}
