import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("Product")
export class Products {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nameProduct!: string;
  
  @Column()
  imageLink!: string;
  
  @Column()
  priceProduct!: string;

  @Column()
  sellerId!: number;

  @Column()
  categoryProduct!: string;

  @Column()
  productDescription!: string;
}