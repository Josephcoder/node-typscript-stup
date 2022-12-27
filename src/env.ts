declare global {
  namespace NodeJS {
    interface ProcessEnv {
      HOST: string;
      USER_NAME: string;
      PASSWORD: string;
      DATABASE: string;
    }
  }
}
export {};
