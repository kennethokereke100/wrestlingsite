export function getAssetPath(path: string) {
  return process.env.NODE_ENV === 'production'
    ? `/wrestlingsite${path}`
    : path;
} 