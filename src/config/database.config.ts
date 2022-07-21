console.log(process.env.TYPEORM_HOST);
export const databaseConfig = {
  type: (process.env.TYPEORM_CONNECTION || "mysql") as any,
  host: process.env.TYPEORM_HOST || "localhost",
  port: parseInt(process.env.TYPEORM_PORT) || 33060,
  username: process.env.TYPEORM_USERNAME || "root",
  password: process.env.TYPEORM_PASSWORD || "root",
  database: process.env.TYPEORM_DATABASE || "swapi",
  autoLoadEntities: true,
  synchronize: true,
};
