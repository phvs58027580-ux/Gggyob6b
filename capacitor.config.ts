import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.pocketworld.game',
  appName: 'Pocket World 3D',
  webDir: 'dist',
  bundledWebRuntime: false,
  android: {
    backgroundColor: '#111827'
  }
};

export default config;
