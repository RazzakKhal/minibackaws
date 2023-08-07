import { myGlobalTable } from "./tableconfiguration";
import { createConnection } from '@typedorm/core';
import { DocumentClientV3 } from '@typedorm/document-client';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { User } from "./user";
import { getEntityManager } from '@typedorm/core';
import 'reflect-metadata';

exports.handler = async function (event: any, context: any) {


    // const documentClient = new DocumentClientV3(new DynamoDBClient({}));

    try {
        createConnection({
            table: myGlobalTable,
            entities: [User],
            // documentClient, // <-- When documentClient is not provided, TypeDORM defaults to use the DocumentClientV2
        });

    } catch (e: any) {
        return {
            isBase64Encoded: false,
            body: JSON.stringify("erreur lors de la connexion a la bdd :" + e),
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            statusCode: 200,
        };
    }


    const entityManger = getEntityManager();

    try {
        // simple récupération par l'id
        console.log('ici')
    //   let response = await entityManger.findOne(User, {id:'0b21fa6e-61c6-4f4c-b277-d48879c5b7d0'});

        // update

        let response = await entityManger.delete(User, {id : '0b21fa6e-61c6-4f4c-b277-d48879c5b7d0'})


      return {
        isBase64Encoded: false,
        body: JSON.stringify(response),
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        statusCode: 200,
    };

        // récupération par un GSI, ici le GSI concerne l'id mais on aurait pu créé un GSI à partir de l'email, du nom, etc ...
    //    await entityManger.find(User,
    //         {id: "855621f2-0969-41b8-824c-c4ea3f75e14b"},
    //         {queryIndex: 'GSI1'})

    } catch (e: any) {
        return {
            isBase64Encoded: false,
            body: JSON.stringify("erreur lors de la récupération de l'entité :" + e),
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            statusCode: 200,
        };
    }

    let response = await entityManger.findOne(User, {
        id:"0b21fa6e-61c6-4f4c-b277-d48879c5b7d0",
    });

    return {
        isBase64Encoded: false,
        body: JSON.stringify(response),
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        statusCode: 200,
    };

}