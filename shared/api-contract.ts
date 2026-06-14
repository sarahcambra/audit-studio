// shared/api-contract.ts

export interface ScanResult {
    id: string;
    status: 'pending' | 'completed' | 'failed';
    data: any;
    createdAt: string;
  }
  
  export interface ScanRequest {
    targetUrl: string;
    options: {
      depth: number;
      recursive: boolean;
    };
  }