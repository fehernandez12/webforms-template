import { BaseResponseDto } from "./base-response-dto";

export interface ListResponseDto extends BaseResponseDto {
  Data: any[];
  Rows: number;
}
