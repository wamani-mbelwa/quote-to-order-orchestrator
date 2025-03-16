import { logger } from '../infrastructure/logging/logger.js'; async function run(){ logger.info('Workers started (stubs).'); setInterval(()=>logger.info('Heartbeat from workers'),10000); } run();
