import {Attribute, Entity, AutoGenerateAttribute, INDEX_TYPE} from '@typedorm/common';
import {AUTO_GENERATE_ATTRIBUTE_STRATEGY} from '@typedorm/common';

@Entity<User>({
  name: "user", 
  primaryKey: {
    partitionKey: 'USER.ID#{{id}}',
    sortKey: 'USER.ID#{{id}}'
  },
  indexes: {
    GSI1: {
      partitionKey: 'USER#{{id}}',
      sortKey: 'USER#{{id}}#STATUS#{{status}}',
      type: INDEX_TYPE.GSI,
    }
  }
})

export class User {

  constructor() {
  }

  @AutoGenerateAttribute({
    strategy: AUTO_GENERATE_ATTRIBUTE_STRATEGY.UUID4,
  })
  id!: string;

  @Attribute()
  name!: string;

  @Attribute({
    unique: true
  })
  email!: string;

  @Attribute()
  status!: string
}