
  interface Window {
    electron: {
      invoke: (str: string, command: string) => Promise<{success: boolean, data: string, error: string}>
    }
  }

  declare const window: Window;
