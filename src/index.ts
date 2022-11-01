import { Context, APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export const lambdaHandler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    console.log(`Event: ${JSON.stringify(event, null, 2)}`);
    console.log(`Context: ${JSON.stringify(context, null, 2)}`);

    // creating user
    const user = await createPrismaUser();

    return {
        statusCode: 200,
        body: JSON.stringify({
            user,
        }),
    };
};

const createPrismaUser = async () => {
    return prisma.user.create({
        data: {
            name: 'Alice',
            email: 'alice@prisma.io',
        },
    })
}
