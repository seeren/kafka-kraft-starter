/* eslint-disable max-lines-per-function */
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { useContainer } from 'class-validator';

import { AppModule } from './app/app.module';
import brokerConfig from './app/shared/brokers/broker.config';

declare const module: {
  hot: {
    accept: () => void;
    dispose: (callable: () => Promise<void>) => void;
  };
};

const bootstrap = async () => {
  const microServiceOption = brokerConfig();
  const pipe = new ValidationPipe({ transform: true, whitelist: true });
  const application = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    microServiceOption,
  );
  useContainer(application.select(AppModule), { fallbackOnErrors: true });
  application.useGlobalPipes(pipe);
  await application.listen();
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => application.close());
  }
};

bootstrap();
