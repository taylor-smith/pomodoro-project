import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import uuidV4 from 'uuid';
import Store from '../../Store';
import { Stores } from '../../types';

interface SelectedStores {
    store?: Store;
}

interface Props extends SelectedStores {}

@inject((stores: Stores): Props => ({store: stores.store}))
@observer
export default class NewPomodoro extends Component<Props, {}> {
    
    componentWillMount(): void {
        const { store } = this.props;
    }
    
    render(): JSX.Element {
        const { store } = this.props;
        return store && store.newPomodoro 
            ? <div>New Pomodoro Inputs Go Here</div>
            : <div></div>
    }
}
