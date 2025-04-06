import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { RolesGuard } from './guards/roles.guard';
import { Reflector } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Example middleware to attach a mock user object
  app.use((req, res, next) => {
    req.user = { role: 'Admin' }; // Replace with actual authentication logic
    next();
  });

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  app.useGlobalGuards(new RolesGuard(new Reflector())); // Add global guard for roles
  await app.listen(3000);
}
bootstrap();
