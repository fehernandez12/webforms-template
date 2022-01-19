export interface WorkflowTaskDto {
  step: number;
  description: string;
  state: string;
  priority: string;
  ownerUser: string;
  creationDate: Date;
  expirationDate: Date;
}
