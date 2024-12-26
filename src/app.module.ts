import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { TwilioModule } from 'nestjs-twilio';

import * as dotenv  from 'dotenv';

dotenv.config()

@Module({
  imports: [MailerModule.forRoot({
    transport: {
      host: process.env.EMAIL_HOST,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    },
  }),
  TwilioModule.forRoot({
    accountSid: process.env.TWILIO_ACCOUNT_SID,
    authToken: process.env.TWILIO_AUTH_TOKEN,
  })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
