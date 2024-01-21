import { registerAs } from '@nestjs/config';
import { DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const CONFIG_DATABASE = 'config-database';

export default registerAs(
  CONFIG_DATABASE,
  (directory: 'dist' | 'src' = 'dist'): DataSourceOptions => ({
    type: process.env.DATABASE_DRIVER as 'mysql' | 'mariadb' | 'postgres',
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT,
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    entities: [`${directory}/app/**/*.entity.ts`],
    synchronize: false,
    migrations: [`${directory}/migrations/*ts`],
    namingStrategy: new SnakeNamingStrategy(),
  }),
);
