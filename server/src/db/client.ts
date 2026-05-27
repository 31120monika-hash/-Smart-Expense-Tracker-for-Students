import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DB_NAME || '', process.env.DB_USER || '', process.env.DB_PASSWORD || {
  host: process.env.DB_HOST || 'localhost',
  dialect: 'sqlite', // or 'postgres'
  storage: process.env.DB_DIALECT === 'sqlite' ? './database.sqlite' : undefined,
});

export default sequelize;