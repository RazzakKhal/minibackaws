import {myGlobalTable} from "./tableconfiguration";
import {createConnection} from '@typedorm/core';
import {DocumentClientV3} from '@typedorm/document-client';
import {DynamoDBClient} from '@aws-sdk/client-dynamodb';
import {User} from "./user";
import {getEntityManager} from '@typedorm/core';
import 'reflect-metadata';

exports.handler = async function(event :any, context:any){

    const user1 = new User();
    user1.name = "Sofiane";
    user1.email = 'khalfallah.sofiane@gmail.com';
    user1.status = 'actif';

    const documentClient = new DocumentClientV3(new DynamoDBClient({}));

    try{
        createConnection({
            table: myGlobalTable,
            entities: [User],
            documentClient, // <-- When documentClient is not provided, TypeDORM defaults to use the DocumentClientV2
          });
                
    }catch(e: any){
        return {
            isBase64Encoded: false,
            body: JSON.stringify("erreur lors de la connexion a la bdd"),
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            statusCode: 200,
        };
    }


      const entityManger = getEntityManager();

      // create item
      try{
        await entityManger.create(user1);
      }catch(e : any){
        return {
            isBase64Encoded: false,
            body: JSON.stringify("erreur lors de la creation de lentite"),
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            statusCode: 200,
        };
      }
       

    return {
        isBase64Encoded: false,
        body: JSON.stringify("l'utilisateur à bien été créé"),
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        statusCode: 200,
    };

}