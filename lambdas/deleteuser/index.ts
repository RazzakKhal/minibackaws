exports.handler = async function(event,context){

   
    return {
        isBase64Encoded: false,
        body: JSON.stringify("l'utilisateur à bien été créé"),
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        statusCode: 200,
    };
}