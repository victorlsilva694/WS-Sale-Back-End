import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("imagesProduct")
export class ImagesProduct {
  @PrimaryGeneratedColumn()
  idImageProduct!: number;

  @Column()
  imagePath!: number

  @Column()
  idProduct!: number;
  
  @Column()
  sellerId!: number;
}