import type { Quote, Order, ID } from '../domain/entities.js';
export interface QuoteRepo{ get(id:ID):Promise<Quote|null>; create(q:Omit<Quote,'id'|'createdAt'|'status'>):Promise<Quote>; markAnalyzed(id:ID):Promise<void>; }
export interface OrderRepo{ get(id:ID):Promise<Order|null>; create(o:Omit<Order,'id'|'createdAt'|'status'>):Promise<Order>; }
export interface Cache{ get(key:string):Promise<string|null>; set(key:string, value:string, ttlSeconds:number):Promise<void>; }
export interface Bus{ publish(eventType:string, payload:any):Promise<void>; }
export interface Queue{ enqueue(payload:any):Promise<void>; }
