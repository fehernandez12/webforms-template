import { WorkflowTaskDto } from "../objects-dto/workflow-task-dto";
import { BaseResponseDto } from "./base-response-dto";

export interface WorkflowTasksResponseDto extends BaseResponseDto {
  Tasks: WorkflowTaskDto[];
  Rows: number;
}
