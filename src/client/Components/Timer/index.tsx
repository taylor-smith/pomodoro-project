import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import uuidV4 from 'uuid';
import Store from '../../Store';
import TimerModel from '../../Models/TimerModel';
import ITimer from '../../../common/models';
import { Stores } from '../../types';
import TimerDisplay from './timerDisplay';
import TimerControls from './timerControls';

interface TimerInterface {
    timer?: TimerModel;
}

interface SelectedStores {
    store?: Store;
}

interface Props extends SelectedStores {}


@inject((stores: Stores): Props => ({store: stores.store}))
@observer
export default class Timer extends Component<Props, {}> {
    
    timer: TimerModel;
    componentWillMount(): void {
        const { store } = this.props;
        store 
            ? store.timer = new TimerModel(
                uuidV4(),
                10000,
                2000,
                5000
            )
            : null;
    }
    
    render(): JSX.Element {
        const { store } = this.props;
        return store 
            ? (<div>
                <TimerDisplay store={store} />
                <TimerControls store={store} />
            </div>)
            : (<div></div>);
    }
}
