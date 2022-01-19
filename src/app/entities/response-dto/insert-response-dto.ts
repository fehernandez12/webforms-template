import { BaseResponseDto } from "./base-response-dto";

export interface InsertResponseDto extends BaseResponseDto {
  barCode: string;
  recordId: number;
  workflowId: number;
  fileCodes: string[];
  fileIdList: number[];
  destinationPath: string[];
}
