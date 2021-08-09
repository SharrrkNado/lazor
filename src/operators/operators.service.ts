import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Operator } from './operator.entity';


@Injectable()
export class OperatorsService extends TypeOrmCrudService<Operator>{
    constructor(@InjectRepository(Operator) repo){
        super(repo)
    }
}
