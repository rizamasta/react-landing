import { AsyncStorage } from 'AsyncStorage';

/**
 * Loads something from storage and runs it thru JSON.parse.
 *
 * @param key The key to fetch.
 */
export async function getItem(key) {
    try {
        const item = await AsyncStorage.getItem(key)
        return JSON.parse(item)
    } catch {
        return null
    }
}


/**
 * Saves an object to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export async function setItem(key, value) {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value))
        return true
    } catch {
        return false
    }
}


/**
* Removes something from storage.
*
* @param key The key to kill.
*/
export async function removeItem(key) {
    try {
        await AsyncStorage.setItem(key, null);
        return true
    } catch (er) {
        console.error(er);

        return false;
    }
}


/**
 * Burn it all to the ground.
 */
export async function clearAll() {
    try {
        await AsyncStorage.clear()
        return true;
    } catch {
        return false;
    }
}