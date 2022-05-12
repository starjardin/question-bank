import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { CreateUserInput } from "../Inputs/createUserInput";
import { User } from '../models/User';


@Resolver()
export class UserResolver {
  @Query(() => [User])
  users() {
    return User.find()
  }

  @Query(() => User)
  async user(@Arg('id') id: string) {
    const user = await User.findOne({where: { id }})
    if (!user) throw new Error("User not  found")
    return user
  }

  @Mutation(() => User)
  async createUser(@Arg("data") data: CreateUserInput) {
    const user = User.create(data)
    await user.save()
    return user
  }

  @Mutation(() => User)
  async updateUser(@Arg("id") id: string, @Arg('data') data: CreateUserInput) {
    const user = await User.findOne({where : { id }})
    if (!user) throw new Error("User not found")
    Object.assign(user, data)
    await user.save()
    return user
  }

  @Mutation(() => Boolean)
  async deletedUser(@Arg("id") id: string) {
    const user  = await User.findOne({where: { id }})
    if (!user) throw new Error("User not found")
    await user.remove()
    return true
  }
}