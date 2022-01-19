import { BaseRequestDto } from "./base-request-dto";

export interface EmailRequestDto extends BaseRequestDto {
  Sender: string;
  Receiver: string;
  Subject: string;
  Message: string;
  IsHtml: boolean;
  User: string;
  Host: string;
}
