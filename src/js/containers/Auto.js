import React from 'react';

/**
 *
 */
export  default  class Auto extends React.PureComponent {
    constructor( props ) {
        super( props );

        this.state = {
            type        : 'sedan',
            parkingPlace: 0

        }
    }


    render() {
        return (
            <h1>Car</h1>
        );
    }


}


Auto.propTypes = {
    type        : React.PropTypes.string,
    parkingPlace: React.PropTypes.number
};