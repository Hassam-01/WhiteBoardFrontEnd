import { FastboardApp } from "@netless/fastboard-core";

class FastboardSingleton {
    private static instance: FastboardSingleton;
    private fastboardApp: FastboardApp | null = null;

    private constructor() {
        // Private constructor
    }

    public static getInstance(): FastboardSingleton {
        if (!FastboardSingleton.instance) {
            FastboardSingleton.instance = new FastboardSingleton();
        }
        return FastboardSingleton.instance;
    }

    public setFastboardApp(app: FastboardApp): void {
        this.fastboardApp = app;
    }

    public getFastboardApp(): FastboardApp | null {
        return this.fastboardApp;
    }
}

export default FastboardSingleton.getInstance();
