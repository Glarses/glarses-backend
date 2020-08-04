import { IsEmail, MinLength } from "class-validator";

export class EchoPayload {
  @IsEmail()
  email: string;

  @MinLength(1)
  password: string;
}
