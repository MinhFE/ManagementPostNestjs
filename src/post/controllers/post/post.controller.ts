import { Controller, Get } from '@nestjs/common';

@Controller('post')
export class PostController {
  constructor() {}

  @Get()
  getAllPost() {
    return []
  }
}
