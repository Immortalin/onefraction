import { prop, Typegoose } from 'typegoose'
import { ObjectType, Field, ID } from 'type-graphql'
import { ObjectId } from 'mongodb'
import { Role } from './consts'

@ObjectType()
export class Profile {
  @prop({ required: true })
  @Field()
  firstName: string

  @prop({ required: true })
  @Field()
  lastName: string
}

@ObjectType()
export class Plaid {
  @prop({ required: true })
  @Field()
  accessToken: string

  @prop({ required: true })
  @Field()
  itemId: string
}

@ObjectType()
export class Property {
  @prop({ required: true })
  @Field()
  address: string

  @prop({ required: true })
  @Field()
  placeId: string

  @prop({ required: true })
  @Field()
  rentAmount: number
}

@ObjectType()
export class User extends Typegoose {
  @Field(type => ID)
  readonly _id: ObjectId

  @prop()
  @Field(type => Profile)
  profile: Profile

  @prop()
  @Field(type => Plaid, { nullable: true })
  plaid?: Plaid

  @prop()
  @Field(type => Property, { nullable: true })
  properties?: Property[]

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
