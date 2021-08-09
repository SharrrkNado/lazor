import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OperatorsModule } from './operators/operators.module';
import { CustomersModule } from './customers/customers.module';
import { LazerjobsModule } from './lazerjobs/lazerjobs.module';

@Module({
  imports: [
    OperatorsModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
       database: 'db',
       entities: ['dist/**/*.entity{.ts,.js}'],
       synchronize: true
    }),
    CustomersModule,
    LazerjobsModule,],
  controllers: [],
  providers: [],
})
export class AppModule {}
