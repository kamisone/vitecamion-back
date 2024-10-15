import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigration1728975743874 implements MigrationInterface {
    name = 'InitMigration1728975743874'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."booking_status_name_enum" AS ENUM('available', 'booked')`);
        await queryRunner.query(`CREATE TABLE "booking_status" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" "public"."booking_status_name_enum" NOT NULL, CONSTRAINT "PK_f3b521fe4729cfad477690ca29d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "booking" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "year" integer NOT NULL, "month" integer NOT NULL, "date" integer NOT NULL, "start_hour" integer NOT NULL, "start_minute" integer NOT NULL, "end_hour" integer NOT NULL, "end_minute" integer NOT NULL, "status_id" uuid NOT NULL, "user_name" character varying NOT NULL, "user_phone" character varying NOT NULL, "user_address" character varying NOT NULL, CONSTRAINT "PK_49171efc69702ed84c812f33540" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_f3b521fe4729cfad477690ca29d" FOREIGN KEY ("status_id") REFERENCES "booking_status"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_f3b521fe4729cfad477690ca29d"`);
        await queryRunner.query(`DROP TABLE "booking"`);
        await queryRunner.query(`DROP TABLE "booking_status"`);
        await queryRunner.query(`DROP TYPE "public"."booking_status_name_enum"`);
    }

}
