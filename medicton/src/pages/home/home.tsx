import * as React from 'react';
import { SignIn } from './components/index';

interface IState{
    visible:boolean
}

export class Home extends React.Component<{}, IState>{
    constructor(props:any){
        super(props);
        this.state={
            visible:true
        };
    }
    render() {
        return (
            <div>
                <h1>home</h1>
                <br />
                <SignIn changeVisible="ahoj"/>
            </div>
        )
            ;
    }
}