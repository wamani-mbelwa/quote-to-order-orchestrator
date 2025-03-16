export type ID = string;
export interface Quote{ id:ID; partNumber:string; quantity:number; createdAt:Date; status:'NEW'|'ANALYZED'|'ORDERED'; }
export interface Order{ id:ID; quoteId:ID; supplierId:ID; priceCents:number; createdAt:Date; status:'PLACED'|'FULFILLING'|'COMPLETED'; }
export interface Job{ id:ID; orderId:ID; phase:'DFM'|'SELECTION'|'PRODUCTION'|'COMPLETE'; updatedAt:Date; }
export interface Supplier{ id:ID; name:string; score:number; }
