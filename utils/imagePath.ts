export const getImagePath = (src: string) => {
  const base = process.env.NODE_ENV === 'production' ? '/wrestlingsite' : '';
  return `${base}${src}`;
}; 