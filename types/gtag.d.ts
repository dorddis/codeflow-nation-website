declare global {
  interface Window {
    gtag?: {
      (command: 'event', eventName: string, eventParams?: Record<string, any>): void;
      (
        command: 'consent',
        action: 'default' | 'update',
        params: {
          analytics_storage?: 'granted' | 'denied';
          ad_storage?: 'granted' | 'denied';
          [key: string]: any;
        }
      ): void;
      (command: 'config', targetId: string, config?: Record<string, any>): void;
      (command: 'js', date: Date): void;
      (command: string, ...args: any[]): void;
    };
  }
}

export {};
