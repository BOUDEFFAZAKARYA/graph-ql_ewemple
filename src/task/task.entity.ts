import { Factory } from "nestjs-seeder";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

import { Field, Int , ObjectType} from '@nestjs/graphql'

@Entity()

@ObjectType()



export class Task {



  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;


  @Factory(faker => faker.lorem.words(2))
  @Column()
  @Field()
  title: string;



  @Factory(faker => faker.lorem.words(2))
  @Column({ nullable: true })
  @Field()
  description: string;




  @Factory(faker => faker.lorem.words(2))
  @Column()
  @Field()
  status: string;
}