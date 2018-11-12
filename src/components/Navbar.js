import React from 'react';

import {DesktopContainer} from './DesktopContainer';
import {MobileContainer} from './MobileContainer';

export class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(
            <div>
                <DesktopContainer>{this.props.children}</DesktopContainer>
                <MobileContainer>{this.props.children}</MobileContainer>
            </div>
        )
    }
}