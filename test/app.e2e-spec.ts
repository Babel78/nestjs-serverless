import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { AppModule } from "./../src/app.module";
import { PlanetsService } from "src/modules/planets/planets.service";
import { SwapiService } from "src/modules/swapi/swapi.service";
import { PlanetsController } from "src/modules/planets/planets.controller";
import { SwapiController } from "src/modules/swapi/swapi.controller";

describe("AppController (e2e)", () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      providers: [PlanetsService, SwapiService],
      controllers: [PlanetsController, SwapiController],
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it("/ (GET)", () => {
    return request(app.getHttpServer())
      .get("/")
      .expect(200)
      .expect("Hello World!");
  });
});
