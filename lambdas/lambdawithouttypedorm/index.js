"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.handler = void 0;
var client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
var lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
var client = new client_dynamodb_1.DynamoDBClient({});
var dynamo = lib_dynamodb_1.DynamoDBDocumentClient.from(client);
var tableName = "myGlobalTable";
var handler = function (event, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, statusCode, headers, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                statusCode = 200;
                headers = {
                    "Content-Type": "application/json"
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, 4, 5]);
                // pour du get
                // body = await dynamo.send(
                //   new GetCommand({
                //     TableName: tableName,
                //     Key: {
                //       PK: event.pathParameters.id,
                //       SK : event.pathParameters.id
                //     },
                //   })
                // );
                // body = body.Item;
                // pour du update ou du create
                return [4 /*yield*/, dynamo.send(new lib_dynamodb_1.UpdateCommand({
                        TableName: tableName,
                        Key: {
                            PK: event.pathParameters.id,
                            SK: event.pathParameters.id
                        },
                        UpdateExpression: "set email = :email",
                        ExpressionAttributeValues: {
                            ":email": "newmail@gmail.com"
                        },
                        ReturnValues: "ALL_NEW"
                    }))];
            case 2:
                // pour du get
                // body = await dynamo.send(
                //   new GetCommand({
                //     TableName: tableName,
                //     Key: {
                //       PK: event.pathParameters.id,
                //       SK : event.pathParameters.id
                //     },
                //   })
                // );
                // body = body.Item;
                // pour du update ou du create
                _a.sent();
                body = "L'entit\u00E9 a \u00E9t\u00E9 correctement modifi\u00E9";
                return [3 /*break*/, 5];
            case 3:
                err_1 = _a.sent();
                statusCode = 400;
                body = err_1.message;
                return [3 /*break*/, 5];
            case 4:
                body = JSON.stringify(body);
                return [7 /*endfinally*/];
            case 5: return [2 /*return*/, {
                    statusCode: statusCode,
                    body: body,
                    headers: headers
                }];
        }
    });
}); };
exports.handler = handler;
