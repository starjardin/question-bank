import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@Entity()
@ObjectType()
export class Sessions extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Field(() => String)
  @Column({ unique: true })
  sessionToken!: string;

  @Field(() => String)
  @Column({ type: "uuid" })
  userId!: string;

  @Field(() => Date, { nullable: true })
  @Column("timestamp with time zone", {
    name: "email_verified",
    nullable: true,
  })
  expires!: string;
}
