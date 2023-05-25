interface Window {
  electron: {
    invoke: (str: string, command: any) => Promise<{ success: boolean; data: string; error: string }>;
  };
}

declare const window: Window;

// declare global {
//   interface Window {
//     electron: {
//       invoke: (str: string, command: any) => Promise<{ success: boolean; data: string; error: string }>;
//     };
//   }
// }

// window.MyNamespace = window.electron || {};
