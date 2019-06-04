import { prop, Typegoose } from 'typegoose'
import { ObjectType, Field, ID } from 'type-graphql'
import { ObjectId } from 'mongodb'
import { Role } from './consts'
import { PromiseProvider } from 'mongoose'

@ObjectType()
class Profile {
  @prop()
  @Field()
  firstName: string

  @prop()
  @Field()
  lastName: string
}

@ObjectType()
export class User extends Typegoose {
  @Field(type => ID)
  readonly _id: ObjectId

  @prop()
  @Field(type => Profile)
  profile: Profile

  @prop({ required: true, enum: Role })
  @Field(type => Role)
  roles: Role[]

  @prop()
  @Field({ nullable: true })
  isOnboarded?: boolean

  @prop()
  @Field(() => Date)
  createdAt: Date

  @prop()
  @Field(() => Date)
  updatedAt: Date
}

export default new User().getModelForClass(User, {
  schemaOptions: { timestamps: true },
})
