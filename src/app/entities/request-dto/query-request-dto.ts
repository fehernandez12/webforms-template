import { HeaderDto } from "../objects-dto/header-dto";
import { FilterParametersDto } from "../objects-dto/filter-parameters-dto";
import { BaseRequestDto } from "./base-request-dto";

export interface QueryRequestDto extends BaseRequestDto {
  filterParameters: FilterParametersDto;
  filter?: string;
  top?: string;
  orderColumn?: string;
  orderType?: string;
}
