import { LocationChangeEvent } from "@angular/common";
import { HeaderDto } from "../objects-dto/header-dto";
import { FileDto } from "../objects-dto/file-dto";
import { DictionaryDto } from "../objects-dto/dictionary-dto";
import { BaseRequestDto } from "./base-request-dto";

export interface InsertRequestDto extends BaseRequestDto {
  operationUser: string;
  formCode: string;
  officeCode: string;
  nextStepUser?: string;
  processId?: number;
  checkWorkflow?: boolean;
  data: DictionaryDto[];
  files?: FileDto[];
}
