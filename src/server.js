import { config } from '#config';
import { prisma } from '#db/prisma.js';
import express from 'express';

const app = express();

app.use(express.json());

app.listen(config.PORT, () => {
  console.log(
    `[${config.NODE_ENV}] Server running at http://localhost:${config.PORT}`,
  );
});

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});
