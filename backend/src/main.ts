import 'reflect-metadata'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap (): Promise<void> {
  const app = await NestFactory.create(AppModule)
  app.enableCors({
    origin: 'skilswipe.vercel.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
  })
  const config = new DocumentBuilder()
    .setTitle(`${process.env.APP_NAME ?? 'skillswipe-dev'} API`)
    .setDescription(
      `The ${process.env.APP_NAME ?? 'skillswipe-dev'} API description`
    )
    .setVersion(process.env.APP_VERSION ?? 'dev')
    .addBearerAuth()
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)
  await app.listen(process.env.APP_PORT ?? 8080)
}
void bootstrap()
