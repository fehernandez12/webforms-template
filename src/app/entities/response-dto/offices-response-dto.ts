import { OfficeDto } from "../objects-dto/office-dto";
import { BaseResponseDto } from "./base-response-dto";

export interface OfficesResponseDto extends BaseResponseDto {
  officeList: OfficeDto[];
}
