import { TrackedModel } from "./../common/TrackedModel";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class User extends TrackedModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column("text", { unique: true })
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ default: "user" })
  role: string;
}
