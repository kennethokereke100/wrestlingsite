export function getImagePath(path: string): string {
  // Check if we're in production
  if (process.env.NODE_ENV === 'production') {
    // If the path already starts with '/wrestlingsite', return as is
    if (path.startsWith('/wrestlingsite')) {
      return path;
    }
    
    // Ensure there's exactly one slash between basePath and the file path
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `/wrestlingsite${cleanPath}`;
  }
  
  // In development, just return the path as is
  return path;
} 