export class Contact {
  name: string;
  occupation: string;
  email: string;
  subject: string;
  content: string;
  constructor(
    name: string,
    occupation: string,
    email: string,
    subject: string,
    content: string,
  ) {
    this.name = name;
    this.occupation = occupation;
    this.email = email;
    this.subject = subject;
    this.content = content;
  }
}
