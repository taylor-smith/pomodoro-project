import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Store from '../../Store';
import { Stores } from '../../types';

interface SelectedStores {
    store?: Store;
}

interface Props extends SelectedStores {}

@inject((stores: Stores): Props => ({store: stores.store}))
@observer
export default class App extends Component<Props, {}> {
    render(): JSX.Element {
        const { store } = this.props;
        return (
            <div>
                <div>{store!.counter}</div>
                <button onClick={store!.increment}>
                </button>
            </div>
        )
    }
}
