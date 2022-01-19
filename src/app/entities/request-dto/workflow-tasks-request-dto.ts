import { BaseRequestDto } from "./base-request-dto";

export interface WorkflowTasksRequestDto extends BaseRequestDto {
  workflowId: number;
}
