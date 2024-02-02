import { Module } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

import { BrokersModule } from './brokers/brokers.module';
import { DatabasesModule } from './databases/databases.module';

@Module({
  imports: [DatabasesModule, BrokersModule],
  providers: [CommandBus],
  exports: [CommandBus],
})
export class SharedModule {}
