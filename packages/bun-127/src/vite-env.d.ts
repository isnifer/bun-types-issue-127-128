/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_UNUSUED_ENV_VAR: "SOME" | "ENUM" | "VALUES";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
