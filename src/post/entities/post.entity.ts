import { BaseEntityPost } from 'src/baseEntity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Post extends BaseEntityPost {

  @Column()
  content: string;

  // @Column()
  // attachments: number[];
}
