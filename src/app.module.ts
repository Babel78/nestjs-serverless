import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { databaseConfig } from "./config/database.config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PlanetsModule } from "./modules/planets/planets.module";
import { SwapiModule } from "./modules/swapi/swapi.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { databaseProviders } from "./database/database.provider";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: ".env" }),
    ...databaseProviders,
    SwapiModule,
    PlanetsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
