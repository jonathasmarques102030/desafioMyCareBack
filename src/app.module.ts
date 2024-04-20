import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnfermeirosModule } from './enfermeiros/enfermeiros.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnidadesModule } from './unidades/unidades.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    EnfermeirosModule,
    UnidadesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
