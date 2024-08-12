import { BaseEntityPost } from 'src/baseEntity';
import { Column, Entity } from 'typeorm';

@Entity()
export class User extends BaseEntityPost {
  @Column({
    unique: true,
  })
  email: string;

  @Column()
  password: string;
}
