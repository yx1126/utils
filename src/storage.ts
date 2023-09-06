export interface StorageApi {
    getItem: (key: string) => any;
    setItem: (key: string, value: any) => void;
    removeItem: (key: string) => void;
}

class StorageProxy {
    private _storage: StorageApi;
    private key: string;

    constructor(key: string, storage: Storage = sessionStorage) {
        this.key = key;
        this._storage = storage;
    }

    get storage() {
        return this._storage;
    }

    get value() {
        return this.get();
    }

    set value(value: any) {
        this.set(value);
    }

    public get() {
        return JSON.parse(this._storage.getItem(this.key));
    }

    public set(value: any) {
        this._storage.setItem(this.key, JSON.stringify(value));
    }

    public remove() {
        this._storage.removeItem(this.key);
    }
}
const user = createStorage("user");
user.get();
/**
 *
 * @example
 * ```js
 * const user = createStorage("user");
 * user.setItem
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
