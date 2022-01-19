import { BaseResponseDto } from "./base-response-dto";

export interface InsertResponseDto extends BaseResponseDto {
  BarCode: string;
  RecordId: number;
  WorkflowId: number;
  FileCodes: string[];
  FileIdList: number[];
  DestinationPath: string[];
}
