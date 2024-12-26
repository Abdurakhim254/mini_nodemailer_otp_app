import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { TwilioService } from "nestjs-twilio";
import * as otpGenerator from 'otp-generator'

const otp=otpGenerator.generate(6,{ upperCaseAlphabets: false, specialChars: false })


export interface check{
  phone_number?:string,
  email:string
}

@Injectable()
export class AppService {
  public constructor(private readonly mailService: MailerService,  
  private readonly twilioService: TwilioService) {}

  sendMail(data:check):string {
    const message1=`Hello Mr We have sent smth otp ${otp} to your email` 
    const message2=`Hello Mr We have sent smth otp to your email` 
    this.mailService.sendMail({
      from:"Mr Abduraxim",
      to:`${data.email}`,
      subject:"How to send email with nodemailer in nest js",
      text:message1
    })
    return message2
  }

  sendPhone(data:check) : string{
    console.log(data.phone_number)
    this.twilioService.client.messages.create({
      body: 'SMS Body, sent to the phone!',
      from: '+998991277006',
      to: data.phone_number,
    })
    return "Telefon raqamga sms yuborildi"
  }
}
