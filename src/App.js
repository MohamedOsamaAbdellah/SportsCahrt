import React from 'react';

import { Charts , RadarChart } from './Components';

class App extends React.Component {
    render(){
        return(
            <div style={{'display':'flex','height':'800px','backgroundColor':'#050612'}}>
                <Charts />
                <RadarChart />
            </div>
        )
    }
}

export default App;
