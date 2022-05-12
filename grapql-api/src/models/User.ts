import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@Entity()
@ObjectType()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  email: string;

  @Field(() => Date, { nullable: true })
  @Column("timestamp with time zone", {
    name: "email_verified",
    nullable: true,
  })
  emailVerified: Date | null;

  @Field(() => String, { nullable: true })
  @Column("text", { name: "image", nullable: true })
  image: string | null;
}
