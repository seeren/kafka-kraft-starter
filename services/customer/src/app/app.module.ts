import { Module } from '@nestjs/common';

import { CustomerModule } from './customer/customer.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [SharedModule, CustomerModule],
})
export class AppModule {}
