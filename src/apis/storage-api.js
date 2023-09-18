export const saveStorage = (key, value) => {
    localStorage.setItem(key, value);
};

export const removeStorage = (key) => {
    localStorage.removeItem(key);
};

export const getStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
};