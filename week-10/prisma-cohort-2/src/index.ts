import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
    const res = await prisma.user.create({
        data: {
            email: username,
            password,
            firstName,
            lastName
        },
        select: {
            id: true,
            password: true
        },
    })
    console.log(res)
}

// insertUser("ajeet@gmail.com", "123455", "ajeet", "kumar");


interface updateParams {
    firstName: string,
    lastName: string
}

async function updateUser(username :string, {
    firstName,
    lastName
}: updateParams) {
    const res = await prisma.user.update({
        where: {email: username},
        data: {
            firstName,
            lastName
        }
    })
    console.log(res)
}

// updateUser("ajeet@gmail.com", {
//     firstName: "harkirat",
//     lastName: "singh"
// })

async function getUser(email: string) {
    const res = await prisma.user.findUnique({
        where: {
            email
        }
    })
    console.log(res)
}

getUser("ajeet@gmail.com");
