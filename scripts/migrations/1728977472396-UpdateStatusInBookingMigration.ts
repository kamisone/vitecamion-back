import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateStatusInBookingMigration1728977472396 implements MigrationInterface {
    name = 'UpdateStatusInBookingMigration1728977472396'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_f3b521fe4729cfad477690ca29d"`);
        await queryRunner.query(`ALTER TABLE "booking" RENAME COLUMN "status_id" TO "status"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "booking" ADD "status" character varying NOT NULL DEFAULT 'available'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "booking" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "booking" ADD "status" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "booking" RENAME COLUMN "status" TO "status_id"`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_f3b521fe4729cfad477690ca29d" FOREIGN KEY ("status_id") REFERENCES "booking_status"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
