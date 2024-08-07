import { BaseEntityPost } from 'src/baseEntity';
import { Column, Entity } from 'typeorm';

@Entity()
export class UserEntity extends BaseEntityPost {
  @Column({
    unique: true,
  })
  email: string;

  @Column()
  password: string;
}
