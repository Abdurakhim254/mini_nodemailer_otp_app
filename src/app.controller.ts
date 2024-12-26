import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService, check } from './app.service';

@Controller('auth')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('email')
  SendMail(@Body() email:check): string {
    return this.appService.sendMail(email);
  }

  @Post('otp')
  sendTelephone(@Body() number:check):string{
    return this.appService.sendPhone(number)
  }
}
