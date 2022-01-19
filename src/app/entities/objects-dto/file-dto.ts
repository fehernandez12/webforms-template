export interface FileDto {
  Base64String: string;
  Ext: string;
  Description: string;
  DocumentTypeCode: string;
  DirectoryCode: string;
  GUID?: string;
  Version?: string;
  Length?: number;
  MainFileId: number;
}
