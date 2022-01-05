import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Products1640632335710 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "Product",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "nameProduct",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "imageLink",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "priceProduct",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "sellerId",
            type: "integer",
            isNullable: true,
          },
          {
            name: "categoryProduct",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "productDescription",
            type: "varchar",
            isNullable: true,
          }
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("Products");
  }
}
