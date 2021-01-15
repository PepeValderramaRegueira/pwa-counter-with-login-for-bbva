/**
 * Given a key and a value, saves them in the localStorage. If the given value
 * is an object, it's saved using JSON.stringify.
 * 
 * @param { string } key - Key to save the data in the localStorage.
 * @param { any } value - Value we want to store in localStorage.
 */
export const saveToLocalStorage = (key, value) => localStorage.setItem(
  key,
  typeof value === 'object' ? JSON.stringify(value) : value
);

/**
 * Removes an element from localStorage with the given key.
 * 
 * @param { string } key - Key of the localStorage value.
 */
export const deleteFromLocalStorage = (key) => localStorage.removeItem(key);

/**
 * Gets an item from the localStorage.
 * 
 * @param { string } key - Key of the item we want to get.
 * @param { boolean } parseItem - Indicates if we want to get the item parsed
 * using JSON.stringify.
 */
export const getFromLocalStorage = (key, parseItem = true) => (
  parseItem
    ? JSON.parse(localStorage.getItem(key))
    : localStorage.getItem(key)
);
