import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity,  PrimaryGeneratedColumn, } from "typeorm";

@Entity()
export class Operator{

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
    email: string;

    @ApiProperty()
    @Column()
    holding: number;

    @ApiProperty()
    @Column()
    passwordHash: string;
}