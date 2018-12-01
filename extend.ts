import { AdadeltaOptimizer } from '@tensorflow/tfjs-core';

declare module '@tensorflow/tfjs-core' {
    interface AdadeltaOptimizer {
        newMethod(message: string): void;
    }
}

AdadeltaOptimizer.prototype.newMethod = function (message: string) {
    const className = this.getClassName();

    console.log('===============');
    console.log(className);
    console.log(message);
    console.log('===============');
}