import { WorkflowTaskDto } from "../objects-dto/workflow-task-dto";
import { BaseResponseDto } from "./base-response-dto";

export interface WorkflowTasksResponseDto extends BaseResponseDto {
  tasks: WorkflowTaskDto[];
  rows: number;
}
