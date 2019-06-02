import { prop, Typegoose } from 'typegoose'
import { ObjectType, Field, ID } from 'type-graphql'
import { ObjectId } from 'mongodb'
import { Role } from './consts'

@ObjectType()
export class User extends Typegoose {
  @Field(type => ID)
  readonly _id: ObjectId

  @prop()
  @Field()
  sessionId?: string

  @prop({ required: true, enum: Role })
  @Field(type => Role)
  roles: Role[]

  @prop({ required: true })
  @Field()
  phoneNumber: string

  @prop({ lowercase: true })
  @Field({ nullable: true })
  username?: string

  @prop({ lowercase: true })
  @Field({ nullable: true })
  ethAddress?: string

  @prop()
  @Field({ nullable: true })
  smsToken?: string

  @prop()
  @Field({ nullable: true })
  isBlocked?: boolean

  @prop()
  @Field({ nullable: true })
  isPhoneVerified?: boolean

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
