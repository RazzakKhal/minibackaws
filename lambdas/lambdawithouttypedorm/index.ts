import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  ScanCommand,
  PutCommand,
  GetCommand,
  DeleteCommand,
  UpdateCommand,
} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});

const dynamo = DynamoDBDocumentClient.from(client);

const tableName = "myGlobalTable";

export const handler = async (event, context) => {
  let body;
  let statusCode = 200;
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    // pour du get
   
        body = await dynamo.send(
          new GetCommand({
            TableName: tableName,
            Key: {
              PK: event.pathParameters.id,
              SK : event.pathParameters.id
            },
          })
        );
        body = body.Item;

  // pour du update 
//  await dynamo.send(
//     new UpdateCommand({
//       TableName: tableName,
//       Key: {
//         PK: event.pathParameters.id,
//         SK : event.pathParameters.id
//       },
//       UpdateExpression: "set email = :email",
//       ExpressionAttributeValues: {
//         ":email": "newmail@gmail.com",
//       },
//       ReturnValues: "ALL_NEW",
//     })
//   );
//   body = `L'entité a été correctement modifié`;

    // pour du delete
    // await dynamo.send(
    //   new DeleteCommand({
    //     TableName: tableName,
    //     Key: {
    //       id: event.pathParameters.id,
    //     },
    //   })
    // );
    // body = `Deleted item ${event.pathParameters.id}`;

    // pour du create
    // let requestJSON = JSON.parse(event.body);
    // await dynamo.send(
    //   new PutCommand({
    //     TableName: tableName,
    //     Item: {
    //       id: requestJSON.id,
    //       email: requestJSON.email,
    //       name: requestJSON.name,
    //       status : requestJSON.status
    //     },
    //   })
    // );
    // body = `Put item ${requestJSON.id}`;

     
  } catch (err) {
    statusCode = 400;
    body = err.message;
  } finally {
    body = JSON.stringify(body);
  }

  return {
    statusCode,
    body,
    headers,
  };
};
