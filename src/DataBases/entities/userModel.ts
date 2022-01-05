import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  Name!: string;
  
  @Column()
  lastName!: string;
  
  @Column()
  Email!: string;

  @Column()
  Password!: string;
}