export interface FileDto {
  base64String: string;
  ext: string;
  description: string;
  documentTypeCode: string;
  directoryCode: string;
  guid?: string;
  version?: string;
  length?: number;
  mainFileId: number;
}
