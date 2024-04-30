export const SALT_OR_ROUNDS = process.env.SALT_OR_ROUNDS || '';
export const AT_SECRET = new TextEncoder().encode(process.env.AT_SECRET || '');
export const RT_SECRET = new TextEncoder().encode(process.env.RT_SECRET || '');
