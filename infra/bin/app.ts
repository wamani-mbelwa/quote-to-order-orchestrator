import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import { OrchestratorStack } from '../lib/stack.js';
const app = new App();
new OrchestratorStack(app, 'OrchestratorStack', {});
