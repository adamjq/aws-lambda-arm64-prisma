# aws-lambda-arm64-prisma
Minimal reproduction to run Prisma on AWS Lambda with arm64 architecture

## Deployment

```
npm install
npx serverless deploy
```

**Note** this packages a SQLite `dev.db` file in the Lambda function which is not writable to as it is not under the Lambda `/tmp` directory. The purpose of the project is to showcase how to package Prisma binaries for AWS Lambda architectures.
