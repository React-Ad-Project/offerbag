import React, { Component } from 'react'
import BottomBar from './components/bottom bar/bottom_bar'


export default class  extends Component {
    render() {
        return (
            <div>
                <div >
               {
                   this.props.children
               } 
               
               </div>
               <BottomBar/>

            </div>
        )
    }
}
