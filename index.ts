import { AdadeltaOptimizer } from '@tensorflow/tfjs';
import "./extend";

const optimizer = new AdadeltaOptimizer(10, 10);

// the existing method is present
const className = optimizer.getClassName();

// the augmentation is also present
optimizer.newMethod(`The className is ${className}.`);