type Env = Partial<Readonly<typeof import("./env.json")>>;

// eslint-disable-next-line no-unused-vars
declare namespace NodeJS {
  // eslint-disable-next-line no-unused-vars
  interface ProcessEnv extends Env {
    readonly API_URL: string;
  }
}

declare module "server-only";
