import { HeaderDto } from "../objects-dto/header-dto";
import { BaseRequestDto } from "./base-request-dto";

export interface ListRequestDto extends BaseRequestDto {
  ListId: number;
  FatherItemId?: number;
}
