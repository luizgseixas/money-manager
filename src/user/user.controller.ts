import { Controller, Get, Post, Body, Param, Inject } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { RegisterUserUsecase } from './common/interfaces/register-user';
import { REGISTER_USER_USECASE } from './common/contants/usecase';

@Controller('user')
export class UserController {
  constructor(
    @Inject(REGISTER_USER_USECASE)
    private readonly registerUserUsecase: RegisterUserUsecase,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.registerUserUsecase.execute(createUserDto);
  }

  @Get()
  findAll() {
    // return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return this.userService.findOne(+id);
  }
}
