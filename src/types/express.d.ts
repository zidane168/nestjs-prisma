// src/types/express.d.ts
import { Request } from 'express';
 

export interface User {
  id: number; // Or the appropriate type for your user ID
  // Other user properties if needed
}


interface ExtendedRequest extends Request<any> {
  user?: User; // Declare optional user property with User interface
}