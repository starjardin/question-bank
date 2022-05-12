import {
  Entity,
  ManyToOne,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { User } from './User';

@Entity()
@ObjectType()
export class Accounts extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Field(() => String)
  @Column({ type: "uuid" })
  userId!: string;

  @Field(() => String)
  @Column()
  type!: string;

  @Field(() => String)
  @Column()
  provider!: string;

  @Field(() => String)
  @Column()
  providerAccountId!: string;

  @Field(() => String)
  @Column({ type: "varchar", nullable: true })
  refresh_token!: string | null;

  @Field(() => String)
  @Column({ type: "varchar", nullable: true })
  access_token!: string | null;

  @Field(() => Date, { nullable: true })
  @Column("timestamp with time zone", {
    name: "email_verified",
    nullable: true,
  })
  expires: string | null;

  @Field(() => String)
  @Column({ type: "varchar", nullable: true })
  token_type!: string | null;

  @Field(() => String)
  @Column({ type: "varchar", nullable: true })
  scope!: string | null;

  @Field(() => String)
  @Column({ type: "varchar", nullable: true })
  id_token!: string | null;

  @Field(() => String)
  @Column({ type: "varchar", nullable: true })
  session_state!: string | null;

  @Field(() => String)
  @Column({ type: "varchar", nullable: true })
  oauth_token_secret!: string | null;

  @Field(() => String)
  @Column({ type: "varchar", nullable: true })
  oauth_token!: string | null;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.email, {
    createForeignKeyConstraints: true,
  })
  user!: User;
}
