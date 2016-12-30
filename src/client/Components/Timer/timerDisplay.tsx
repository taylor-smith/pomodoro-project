import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Store from '../../Store/TimerStore';
import { Stores } from '../../types';

interface SelectedStores {
    store?: Store;
}

interface Props extends SelectedStores {}

@inject((stores: Stores): Props => ({store: stores.timerStore}))
@observer
export default class Timer extends Component<Props, {}> {
    render(): JSX.Element {
        const { store } = this.props;
        return (
            <div>
                {store!.timerDisplay}
            </div>
        )
    }
}
