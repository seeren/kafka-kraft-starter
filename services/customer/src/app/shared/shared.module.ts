import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { BrokersModule } from './brokers/brokers.module';
import { DatabasesModule } from './databases/databases.module';

@Module({
  imports: [DatabasesModule, BrokersModule, CqrsModule],
  exports: [BrokersModule, CqrsModule],
})
export class SharedModule {}
