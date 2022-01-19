import { BaseResponseDto } from "./base-response-dto";

export interface ListResponseDto extends BaseResponseDto {
  data: any[];
  rows: number;
}
