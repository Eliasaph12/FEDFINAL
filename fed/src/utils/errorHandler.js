// Global error handler utility
export const handleError = (error, context = '') => {
  console.error(`Error in ${context}:`, error);
  
  // Log to external service in production
  if (process.env.NODE_ENV === 'production') {
    // Replace with your error tracking service
    // logToService(error, context);
  }
  
  return {
    message: 'An error occurred. Please try again.',
    code: error.code || 'UNKNOWN_ERROR'
  };
};

// Async error wrapper
export const asyncHandler = (fn) => {
  return async (...args) => {
    try {
      return await fn(...args);
    } catch (error) {
      return handleError(error, fn.name);
    }
  };
};

// Network request error handler
export const handleNetworkError = (error) => {
  if (!navigator.onLine) {
    return 'No internet connection';
  }
  
  if (error.response?.status >= 500) {
    return 'Server error. Please try again later.';
  }
  
  if (error.response?.status === 404) {
    return 'Resource not found';
  }
  
  return 'Network error occurred';
};