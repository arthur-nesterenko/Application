'use strict';
import React, { Component }               from 'react';
import FormParking from './components/FormParking';
/**
 *
 */
export default class App extends React.Component {

    constructor( props ) {
        super( props );
    }


    renderChildren() {
        return React.cloneElement( this.props.children, {
            params: this.state
        } );
    }

    render() {
        return (
            <div>
                <h1>Parking system</h1>
                <FormParking/>
            </div>
        );
    }

}
