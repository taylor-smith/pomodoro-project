import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
// import Store from '../../Store/TimerStore';
// import { Stores } from '../../types';
import TimerModel from '../../models/TimerModel';

// interface SelectedStores {
//     store?: Store;
// }

// interface Props extends SelectedStores {}

// @inject((stores: Stores): Props => ({store: stores.timerStore}))
@observer
export default class Timer extends Component<{timer: TimerModel}, {}> {
    constructor(props: any) {
        super(props);
        console.log(props);
    }

    render(): JSX.Element {
        const { timer } = this.props;
        return (
            <div>
                <button onClick={timer.startTimer}>
                    Start Timer
                </button>
                <button onClick={timer.resetTimer}>
                    Reset Timer
                </button>
            </div>
        )
    }
}
