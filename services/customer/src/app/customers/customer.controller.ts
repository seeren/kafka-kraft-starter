import { Controller, UseFilters } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { InsertResult } from 'typeorm';

import { RcpEBadRequestExceptionFilter } from './../../core/filters/rcp-bad-request-exception.filter';
import { CreateCustomerCommand } from './commands/create-customer.command';
import { CreateCustomerDto } from './dtos/create-customer.dto';

@Controller()
export class CustomerController {
  constructor(private readonly commandBus: CommandBus) {}

  @UseFilters(RcpEBadRequestExceptionFilter)
  @MessagePattern('kafka-karft-starter.customers.1.0.action.create')
  create(@Payload() createCustomerDto: CreateCustomerDto) {
    return this.commandBus.execute<CreateCustomerCommand, InsertResult>(
      new CreateCustomerCommand(
        createCustomerDto.firstName,
        createCustomerDto.lastname,
      ),
    );
  }
}
