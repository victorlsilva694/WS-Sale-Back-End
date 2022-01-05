import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class imageProduct1640920816356 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "imageProducts",
        columns: [
          {
            name: "idImageProduct",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: "idProduct",
            type: "integer",
            isNullable: true,
          },
          {
            name: "sellerId",
            type: "integer",
            isNullable: true,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
