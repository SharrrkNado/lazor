import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Customer } from './customer.entity';
import { CustomersService } from './customers.service';

@Crud({
    model: {
        type: Customer
    }
})

@ApiTags('Customers')
@Controller('Customers')
export class CustomersController implements CrudController<Customer> {
    constructor(public service:CustomersService){}
}
