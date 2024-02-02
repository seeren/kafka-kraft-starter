import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';

import { CreateCustomerCommand } from '../commands/create-customer.command';
import { Customer } from '../customer.entity';

@CommandHandler(CreateCustomerCommand)
export class CreateCustomerHandler
  implements ICommandHandler<CreateCustomerCommand>
{
  constructor(
    @InjectRepository(Customer)
    private readonly repository: Repository<Customer>,
  ) {}

  execute(command: CreateCustomerCommand): Promise<InsertResult> {
    return this.repository.insert(command);
  }
}
