import { Stores } from '../types';
import Store from '../Store';

/**
 * Creates the MobX stores.
 */

export default function createMobxStores(): Stores {
    return {
        store: new Store()
    };
}