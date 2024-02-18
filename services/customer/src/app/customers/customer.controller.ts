import {
  ClassSerializerInterceptor,
  Controller,
  ParseUUIDPipe,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { RcpEBadRequestExceptionFilter } from './../../core/filters/rcp-bad-request-exception.filter';
import { CreateCustomerCommand } from './commands/create-customer.command';
import { Customer } from './customer.entity';
import { CreateCustomerDto } from './dtos/create-customer.dto';
import { CustomerByIdQuery } from './query/customer-by-id.query';

@Controller()
export class CustomerController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @UseFilters(RcpEBadRequestExceptionFilter)
  @UseInterceptors(ClassSerializerInterceptor)
  @MessagePattern('kafka-karft-starter.customers.1.0.action.create')
  create(@Payload() createCustomerDto: CreateCustomerDto): Promise<Customer> {
    return this.commandBus.execute<CreateCustomerCommand, Customer>(
      new CreateCustomerCommand(
        createCustomerDto.firstName,
        createCustomerDto.lastName,
      ),
    );
  }

  @UseFilters(RcpEBadRequestExceptionFilter)
  @UseInterceptors(ClassSerializerInterceptor)
  @MessagePattern('kafka-karft-starter.customers.1.0.action.retrieve')
  findOne(@Payload('id', ParseUUIDPipe) id: string): Promise<Customer> {
    return this.queryBus.execute<CustomerByIdQuery, Customer>(
      new CustomerByIdQuery(id),
    );
  }
}
