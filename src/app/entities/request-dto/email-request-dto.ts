import { BaseRequestDto } from "./base-request-dto";

export interface EmailRequestDto extends BaseRequestDto {
  sender: string;
  receiver: string;
  subject: string;
  message: string;
  isHtml: boolean;
  user: string;
  host: string;
}
