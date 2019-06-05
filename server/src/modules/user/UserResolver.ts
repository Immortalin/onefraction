import {
  Arg,
  Resolver,
  Query,
  Authorized,
  Mutation,
  Field,
  InputType,
  ObjectType,
  FieldResolver,
  Root,
  ID,
  Ctx,
} from 'type-graphql'
import { Context } from '../common/context'
import { UserService } from './UserService'
import { User } from './UserEntity'
import './enums'

@Resolver(User)
export default class UserResolver {
  private readonly service: UserService

  constructor() {
    this.service = new UserService()
  }

  @Query(returns => User)
  @Authorized()
  async me(@Ctx() ctx: Context) {
    if (ctx.userId) {
      return await this.service.findOneById(ctx.userId)
    }
  }
}
