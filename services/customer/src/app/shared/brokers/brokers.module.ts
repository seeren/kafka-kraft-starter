import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, KafkaOptions } from '@nestjs/microservices';

import { CONFIG_BROKER, CONFIG_BROKER_NAME } from './broker.config';
import brokerConfig from './broker.config';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: CONFIG_BROKER_NAME,
        useFactory: (configService: ConfigService) =>
          configService.get<KafkaOptions>(CONFIG_BROKER),
        inject: [ConfigService],
        imports: [ConfigModule.forFeature(brokerConfig)],
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class BrokersModule {}
