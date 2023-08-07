"use strict";
exports.__esModule = true;
exports.myGlobalTable = void 0;
var common_1 = require("@typedorm/common");
exports.myGlobalTable = new common_1.Table({
    name: 'myGlobalTable',
    partitionKey: 'PK',
    sortKey: 'SK',
    indexes: {
        GSI1: {
            type: common_1.INDEX_TYPE.GSI,
            partitionKey: 'GSI1PK',
            sortKey: 'GSI1SK'
        },
        GSI2: {
            type: common_1.INDEX_TYPE.GSI,
            partitionKey: 'GSI2PK',
            sortKey: 'GSI2SK'
        }
    }
});
