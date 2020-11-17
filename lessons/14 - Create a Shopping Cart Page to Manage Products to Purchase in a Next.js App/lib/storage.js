const APP_KEY = 'SPACEJELLY';

/**
 * getStorageItem
 */

export function getStorageItem(key) {
  if ( typeof window === 'undefined' ) return;

  let data = window.localStorage.getItem(`${APP_KEY}_${key}`);

  try {
    return JSON.parse(data);
  } catch(e) {
    throw new Error(`Failed to parse data from ${APP_KEY}_${key}`);
  }
}

/**
 * setStorageItem
 */

export function setStorageItem(key, value) {
  if ( typeof window === 'undefined' ) return;
  const data = JSON.stringify(value);
  return window.localStorage.setItem(`${APP_KEY}_${key}`, data);
}