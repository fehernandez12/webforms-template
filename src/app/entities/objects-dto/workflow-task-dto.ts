export interface WorkflowTaskDto {
  Step: number;
  Description: string;
  State: string;
  Priority: string;
  OwnerUser: string;
  CreationDate: Date;
  ExpirationDate: Date;
}
