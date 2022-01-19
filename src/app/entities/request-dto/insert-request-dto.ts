import { LocationChangeEvent } from "@angular/common";
import { HeaderDto } from "../objects-dto/header-dto";
import { FileDto } from "../objects-dto/file-dto";
import { DictionaryDto } from "../objects-dto/dictionary-dto";
import { BaseRequestDto } from "./base-request-dto";

export interface InsertRequestDto extends BaseRequestDto {
  OperationUser: string;
  FormCode: string;
  OfficeCode: string;
  NextStepUser?: string;
  ProcessId?: number;
  CheckWorkflow?: boolean;
  Data: DictionaryDto[];
  Files?: FileDto[];
}
