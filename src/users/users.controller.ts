import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "./entities/user.entity";

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Get()
    async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    // create user with POST input data
    @Post()
    create(@Body() createUserDto: any): Promise<any> {
        return this.usersService.create(createUserDto);
    }
}