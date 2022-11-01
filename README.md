# aws-lambda-arm64-prisma
Minimal reproduction to run Prisma on AWS Lambda with arm64 architecture

## Deployment

```
npm install
npx serverless deploy
```

**Note** this packages a SQLite `dev.db` file in the Lambda function which is not writable to as it is not under the Lambda `/tmp` directory. The purpose of the project is to showcase how to package Prisma binaries for AWS Lambda architectures.

## OpenSSL 1.1.x

The `linux-arm64-openssl-1.1.x` binary gives the following error on AWS lambda:

```
2022-11-01T01:48:28.372Z	139202dd-0404-484a-81c9-51c00e679b77	ERROR	Invoke Error 	{"errorType":"Error","errorMessage":"\nInvalid `prisma.user.create()` invocation in\n/var/task/src/index.js:19:24\n\n  16 };\n  17 exports.lambdaHandler = lambdaHandler;\n  18 const createPrismaUser = async () => {\n→ 19     return prisma.user.create(\nQuery engine library for current platform \"linux-arm64-openssl-1.0.x\" could not be found.\nYou incorrectly pinned it to linux-arm64-openssl-1.0.x\n\nThis probably happens, because you built Prisma Client on a different platform.\n(Prisma Client looked in \"/var/task/node_modules/@prisma/client/runtime/libquery_engine-linux-arm64-openssl-1.0.x.so.node\")
```
