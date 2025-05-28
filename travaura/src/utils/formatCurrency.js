/**
 * Format number as currency
 * @param {number} amount - Amount to format
 * @param {string} currencyCode - Currency code (e.g., 'USD', 'EUR')
 * @param {string} locale - Locale for formatting (default: 'en-US')
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (
  amount, 
  currencyCode = 'USD', 
  locale = 'en-US'
) => {
  if (amount === undefined || amount === null) return '';
  
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(amount);
};

/**
 * Format number with thousands separators
 * @param {number} num - Number to format
 * @param {string} locale - Locale for formatting (default: 'en-US')
 * @returns {string} Formatted number string
 */
export const formatNumber = (num, locale = 'en-US') => {
  if (num === undefined || num === null) return '';
  
  return new Intl.NumberFormat(locale).format(num);
};