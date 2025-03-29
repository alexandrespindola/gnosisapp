/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    t: {
      (key: string, options?: any): string;
      dir: (locale?: string) => 'ltr' | 'rtl';
      all: () => Record<string, string>;
      exists: (key: string, options?: { lng?: string }) => boolean;
    }
  }
}
