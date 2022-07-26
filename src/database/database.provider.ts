import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
      type: "mysql",
      host: configService.get("TYPEORM_HOST"),
      port: +configService.get<number>("TYPEORM_PORT"),
      username: configService.get("TYPEORM_USERNAME"),
      password: configService.get("TYPEORM_PASSWORD"),
      database: configService.get("TYPEORM_DATABASE"),
      synchronize: true,
      autoLoadEntities: true,
    }),
  }),
];
