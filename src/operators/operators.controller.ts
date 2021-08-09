import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Operator } from './operator.entity';
import { OperatorsService } from './operators.service';

@Crud({
    model: {
        type: Operator
    }
})

@ApiTags('Operators')
@Controller('operators')
export class OperatorsController implements CrudController<Operator> {
    constructor(public service:OperatorsService){}
}
