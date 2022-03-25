import _default from './dist/config/config.default';
export * from './dist/index';

declare module '@midwayjs/core' {
  // eslint-disable-next-line
  interface MidwayConfig extends Partial<typeof _default> {}
}
