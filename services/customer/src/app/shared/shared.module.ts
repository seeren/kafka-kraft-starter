import { Module } from '@nestjs/common';

import { BrokersModule } from './brokers/brokers.module';
import { DatabasesModule } from './databases/databases.module';

@Module({
  imports: [DatabasesModule, BrokersModule],
})
export class SharedModule {}
