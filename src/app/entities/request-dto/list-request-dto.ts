import { HeaderDto } from "../objects-dto/header-dto";
import { BaseRequestDto } from "./base-request-dto";

export interface ListRequestDto extends BaseRequestDto {
  listId: number;
  fatherItemId?: number;
}
