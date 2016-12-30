import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Timer from '../Timer';

@observer
export default class App extends Component<{}, {}> {
    render(): JSX.Element {
        return (
            <div>
                <Timer />
            </div>
        )
    }
}
