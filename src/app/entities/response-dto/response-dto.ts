import { DictionaryDto } from "../objects-dto/dictionary-dto";
import { BaseResponseDto } from "./base-response-dto";

export interface ResponseDto extends BaseResponseDto {
  Data: DictionaryDto[];
  Rows: number;
}
