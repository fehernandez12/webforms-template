import { HeaderDto } from "../objects-dto/header-dto";
import { FilterParametersDto } from "../objects-dto/filter-parameters-dto";
import { BaseRequestDto } from "./base-request-dto";

export interface QueryRequestDto extends BaseRequestDto {
  FilterParameters: FilterParametersDto;
  Filter?: string;
  Top?: string;
  OrderColumn?: string;
  OrderType?: string;
}
