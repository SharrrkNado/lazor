import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity,  PrimaryGeneratedColumn, } from "typeorm";

@Entity()
export class Customer{

    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    firstname: string;

    @ApiProperty()
    @Column()
    lastname: string;

    @ApiProperty()
    @Column()
    nickName: string;
    
    @ApiProperty()
    @Column()
    email: string;
}