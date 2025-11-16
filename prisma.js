import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;

// this solves the problem for me, so whenever i change the schema i can just run this and ill have  no issues
// ./node_modules/.bin/prisma.cmd db push --force-reset
