import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialMigration1710000000000 implements MigrationInterface {
  name = 'InitialMigration1710000000000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // ─── Create schemas ───────────────────────────────────────────────
    await queryRunner.query(`CREATE SCHEMA IF NOT EXISTS "setting"`);
    await queryRunner.query(`CREATE SCHEMA IF NOT EXISTS "task_distribution"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP SCHEMA IF EXISTS "task_distribution" CASCADE`,
    );
    await queryRunner.query(`DROP SCHEMA IF EXISTS "setting" CASCADE`);
  }
}
