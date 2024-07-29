import { Injectable } from '@angular/core';
import * as emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class CorreoService {

  constructor() {
    emailjs.init('kJpPLWuM919m4Nk_K');
  }

  sendEmail(toEmail: string, subject: string, message: string): Promise<emailjs.EmailJSResponseStatus> {
    const templateParams = {
      to_email: toEmail,
      subject: subject,
      message: message
    };

    return emailjs.send('service_v7f728j', 'template_s7ilcn2', templateParams);
  }
}
