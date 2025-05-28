/**
 * Validate email format
 * @param {string} email - Email address to validate
 * @returns {boolean} True if email is valid, false otherwise
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate password strength
 * @param {string} password - Password to validate
 * @returns {Object} Validation result with isValid and message
 */
export const validatePassword = (password) => {
  if (!password || password.length < 8) {
    return {
      isValid: false,
      message: 'Password must be at least 8 characters long'
    };
  }
  
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
  if (!hasUppercase || !hasLowercase || !hasDigit || !hasSpecial) {
    return {
      isValid: false,
      message: 'Password must include uppercase, lowercase, number, and special character'
    };
  }
  
  return {
    isValid: true,
    message: 'Password is strong'
  };
};

/**
 * Get password strength score (0-4)
 * @param {string} password - Password to evaluate
 * @returns {number} Strength score from 0 (very weak) to 4 (very strong)
 */
export const getPasswordStrength = (password) => {
  if (!password) return 0;
  
  let score = 0;
  
  // Length check
  if (password.length >= 8) score += 1;
  if (password.length >= 12) score += 1;
  
  // Complexity checks
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score += 1;
  if (/\d/.test(password)) score += 0.5;
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score += 0.5;
  
  // No repeating patterns
  if (!/(.)\1{2,}/.test(password)) score += 1;
  
  return Math.min(4, Math.floor(score));
};

/**
 * Validate phone number format
 * @param {string} phone - Phone number to validate
 * @returns {boolean} True if phone number is valid, false otherwise
 */
export const validatePhone = (phone) => {
  // Basic phone validation - allows various formats
  const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  return phoneRegex.test(phone);
};

/**
 * Validate credit card number using Luhn algorithm
 * @param {string} cardNumber - Credit card number (digits only)
 * @returns {boolean} True if card number is valid, false otherwise
 */
export const validateCreditCard = (cardNumber) => {
  // Remove all non-digit characters
  const digits = cardNumber.replace(/\D/g, '');
  
  if (digits.length < 13 || digits.length > 19) return false;
  
  // Luhn algorithm
  let sum = 0;
  let shouldDouble = false;
  
  // Loop from right to left
  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = parseInt(digits.charAt(i));
    
    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    
    sum += digit;
    shouldDouble = !shouldDouble;
  }
  
  return sum % 10 === 0;
};