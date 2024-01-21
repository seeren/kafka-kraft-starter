import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';

import { AppModule } from './app/app.module';

declare const module: {
  hot: {
    accept: () => void;
    dispose: (callable: () => Promise<void>) => void;
  };
};

const bootstrap = async () => {
  const application = await NestFactory.create(AppModule);
  useContainer(application.select(AppModule), { fallbackOnErrors: true });
  application.useGlobalPipes(
    new ValidationPipe({ transform: true, whitelist: true }),
  );
  await application.listen(+process.env.SERVER_PORT);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => application.close());
  }
};

bootstrap();
