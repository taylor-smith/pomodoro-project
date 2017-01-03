import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Store from '../../Store';
// import { Stores } from '../../types';
import TimerModel from '../../models/TimerModel';

// interface SelectedStores {
//     store?: Store;
// }

// interface Props extends SelectedStores {}

// @inject((stores: Stores): Props => ({store: stores.timerStore}))
@observer
export default class Timer extends Component<{store: Store}, {}> {
    constructor(props: any) {
        super(props);
        // console.log(props);
    }

    render(): JSX.Element {
        const { store } = this.props;
        return (
            <div>
                <button onClick={store.timer.startTimer} disabled={store.isNewPomodoro}>
                    Start Timer
                </button>
                <button onClick={store.timer.resetTimer} disabled={store.isNewPomodoro}>
                    Reset Timer
                </button>
            </div>
        )
    }
}
