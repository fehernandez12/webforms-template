import { OfficeDto } from "../objects-dto/office-dto";
import { BaseResponseDto } from "./base-response-dto";

export interface OfficesResponseDto extends BaseResponseDto {
  OfficeList: OfficeDto[];
}
