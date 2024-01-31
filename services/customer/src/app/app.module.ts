import { Module } from '@nestjs/common';

import { CustomersModule } from './customers/customers.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [SharedModule, CustomersModule],
})
export class AppModule {}
