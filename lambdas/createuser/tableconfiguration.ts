import {Table, INDEX_TYPE} from '@typedorm/common';



   export const myGlobalTable = new Table({
        name: 'myGlobalTable2',
        partitionKey: 'PK',
        sortKey: 'SK' 
      });



