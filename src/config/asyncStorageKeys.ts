const ASYNC_STORAGE_BASE_KEY = '@GamePlay';

export const asyncStorageKeys = {
  base: ASYNC_STORAGE_BASE_KEY,
  appointments: `${ASYNC_STORAGE_BASE_KEY}:appointments`,
} as const;
