import { DataSource } from 'typeorm';

import databaseConfig from './src/app/shared/databases/database.config';

export default new DataSource({ ...databaseConfig('src') });
