import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_5inU7h9xwOnwNI9CzzMo3");


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name:string;
  email:string;
  message:string;

  constructor(){}

  ngOnInit(): void {
  }

  processForm() {

    try{
    emailjs.send("122122","template_fqecr8c",{
      from_name: this.name,
      from_Email: this.email,
      message: this.message,
      }); 
       var allInfo = `האימייל נשלח בהצלחה`
      alert(allInfo)
    }
    catch
    {
     var allInfo1 = `התרחשה שגיאה`
      alert(allInfo); 
    }


  }


    
  

}
