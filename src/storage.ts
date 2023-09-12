export interface StorageOptions {
    getItem: (key: string) => any;
    setItem: (key: string, value: any) => void;
    removeItem: (key: string) => void;
}

class StorageProxy {
    private _storage: StorageOptions;
    private key: string;

    constructor(key: string, storage: StorageOptions = sessionStorage) {
        this.key = key;
        this._storage = storage;
    }

    /**
     * Returns storage;
     */
    get storage() {
        return this._storage;
    }

    /**
     * get storage value;
     */
    get value() {
        return this.get();
    }

    /**
     * save storage value;
     */
    set value(value: any) {
        this.set(value);
    }

    /**
     * get storage value;
     */
    public get() {
        return JSON.parse(this._storage.getItem(this.key));
    }

    /**
     * save storage value;
     */
    public set(value: any) {
        this._storage.setItem(this.key, JSON.stringify(value));
    }

    /**
     * remove storage value;
     */
    public remove() {
        this._storage.removeItem(this.key);
    }
}

/**
 *
 * @example
 * ```js
 * const user = createStorage("user");
 *
 * const info = { name: "xiao", age: 18 };
 *
 * // save data
 * user.set(info);
 * // or
 * user.value = info;
 *
 * // get data
 * console.log(user.get()); // { name: "xiao", age: 18 }
 * // or
 * console.log(user.value); // { name: "xiao", age: 18 }
 *
 * // delete data
 * user.remove();
 * ```
 *
 * @param {String} key - The key in storage
 * @param {Object} storage -
 *
 * @returns
 */
export function createStorage(...args: ConstructorParameters<typeof StorageProxy>) {
    return new StorageProxy(...args);
}
