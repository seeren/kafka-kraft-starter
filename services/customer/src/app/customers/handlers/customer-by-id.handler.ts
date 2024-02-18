import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Customer } from '../customer.entity';
import { CustomerByIdQuery } from '../query/customer-by-id.query';

@QueryHandler(CustomerByIdQuery)
export class CustomerByIdHandler implements IQueryHandler<CustomerByIdQuery> {
  constructor(
    @InjectRepository(Customer)
    private readonly repository: Repository<Customer>,
  ) {}

  execute(query: CustomerByIdQuery): Promise<Customer> {
    return this.repository.findOneBy({ id: query.id });
  }
}
