import { DataSource } from 'typeorm';

import databaseConfig from './src/config/database.config';

export default new DataSource({ ...databaseConfig('src') });
