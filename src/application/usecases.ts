import type { Quote, Order, ID } from '../domain/entities.js';
import type { QuoteRepo, OrderRepo, Cache, Bus, Queue } from './ports.js';
import { randomUUID } from 'node:crypto';
export class CreateQuote{ constructor(private quotes:QuoteRepo, private bus:Bus){}
  async execute(input:{partNumber:string; quantity:number}):Promise<Quote>{
    const created=await this.quotes.create({partNumber:input.partNumber, quantity:input.quantity});
    await this.bus.publish('QUOTE_CREATED',{id:created.id});
    return created; }}
export class PlaceOrder{ constructor(private orders:OrderRepo, private quotes:QuoteRepo, private queue:Queue){}
  async execute(input:{quoteId:ID}):Promise<Order>{ const q=await this.quotes.get(input.quoteId); if(!q) throw new Error('Quote not found');
    const created=await this.orders.create({quoteId:q.id, supplierId:'SUPP-1', priceCents:12345});
    await this.queue.enqueue({type:'ORDER_PLACED', orderId:created.id}); return created; }}
export class GetOrderStatus{ constructor(private orders:OrderRepo, private cache:Cache){}
  async execute(input:{orderId:ID}):Promise<string>{ const k=`order-status:${input.orderId}`; const c=await this.cache.get(k); if(c) return c; const o=await this.orders.get(input.orderId); if(!o) throw new Error('Order not found'); const s=o.status; await this.cache.set(k, s, 30); return s; }}
