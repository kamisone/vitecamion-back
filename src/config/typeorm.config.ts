import { number, object, string } from 'yup';
import { registerAs } from '@nestjs/config';
import { join } from 'path';

const typeormConfigSchema = object({
  TYPEORM_HOST: string().required(),
  TYPEORM_USERNAME: string().required(),
  TYPEORM_PASSWORD: string().required(),
  TYPEORM_DATABASE: string().required(),
  TYPEORM_PORT: number().required(),
  TYPEORM_RETRY_ATTEMPTS: number().positive(),
});

export const typeormConfig = registerAs('back_db', async function () {
  const env = await typeormConfigSchema.validate(process.env);

  return {
    type: 'postgres',
    host: env.TYPEORM_HOST,
    port: env.TYPEORM_PORT,
    username: env.TYPEORM_USERNAME,
    password: env.TYPEORM_PASSWORD,
    database: env.TYPEORM_DATABASE,
    retryAttempts: env.TYPEORM_RETRY_ATTEMPTS,
    entities: [join(__dirname, '..', '**', '*.model.js')],
    migrations: [join(__dirname, '..', '..', 'scripts/migrations/*.js')],
  };
});
