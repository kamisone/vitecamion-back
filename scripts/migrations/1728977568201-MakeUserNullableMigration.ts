import { MigrationInterface, QueryRunner } from "typeorm";

export class MakeUserNullableMigration1728977568201 implements MigrationInterface {
    name = 'MakeUserNullableMigration1728977568201'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "booking" ALTER COLUMN "user_name" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "booking" ALTER COLUMN "user_phone" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "booking" ALTER COLUMN "user_address" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "booking" ALTER COLUMN "user_address" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "booking" ALTER COLUMN "user_phone" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "booking" ALTER COLUMN "user_name" SET NOT NULL`);
    }

}
