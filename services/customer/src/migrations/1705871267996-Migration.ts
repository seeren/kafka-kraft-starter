import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1705871267996 implements MigrationInterface {
  name = 'Migration1705871267996';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`customer\` (\`id\` varchar(36) NOT NULL, \`firstname\` varchar(255) NOT NULL, \`lastname\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`customer\``);
  }
}
