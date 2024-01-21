import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import type { DataSourceOptions } from 'typeorm';

import databaseConfig, {
  CONFIG_DATABASE,
} from './../../../config/database.config';

@Module({
  imports: [
    ConfigModule.forFeature(databaseConfig),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) =>
        configService.get<DataSourceOptions>(CONFIG_DATABASE),
      inject: [ConfigService],
      extraProviders: [ConfigService],
    }),
  ],
})
export class DatabasesModule {}
