import React from 'react';
import {Route, Switch} from 'react-router-dom';
import EnspireLayout from '../../layouts/EnspireLayout';
import EnspirePage from './index';
class DecafRoutes extends React.Component {

    withEnspireLayout(Child) {
        return () =>
            (<EnspireLayout>
                <Child />
            </EnspireLayout>)
    }

    render() {
        return (
            <Switch>
                <Route path="/enspire/" exact component={this.withEnspireLayout(EnspirePage)}/>
            </Switch>
        )
    }
}

export default DecafRoutes;