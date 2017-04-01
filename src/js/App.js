'use strict';
import React             from 'react';
import FormParking from './components/FormParking';
import Parking from './containers/Parking';
import {generateId} from './Helpers/generateId';
/**
 * helper function for generate unique key
 */


/**
 *
 */
export default class App extends React.Component {

    constructor( props ) {
        super( props );
        this.parking = {
            'name'      : 'A',
            'total'     : 30,
            'truck'     : 10,
            'disableCar': 5,
            'defaultCar': 15
        };
        this.state = {
            listParking: [],
            totalCars  : []
        };

        this.handleSubmitParkingForm = this.handleSubmitParkingForm.bind( this );
        this.onChange = this.onChange.bind( this );
    }

    componentDidMount() {
        this.setState( {
            listParking: this.state.listParking.concat( this.parking )
        } );
    }

    onChange( e ) {

        const type = e.target.getAttribute( 'data-required-type' );
        let value = e.target.value;
        console.info(
            'N==', e.target.name,
            'value', e.target.value, 'type',
            e.target.getAttribute( 'data-required-type' )
        );
        if ( type === 'number' && !isNaN( value ) ) {
            value = Number( value );
        }

        this.parking[ e.target.name ] = value;
    }

    handleSubmitParkingForm( e ) {
        e.preventDefault();


        this.setState( {
            listParking: this.state.listParking.concat( this.parking )
        } );

        this.parking = {};
    }


    render() {
        console.info( 'state', this.state );
        return (
            <div>
                <h1>Parking system</h1>
                <div>
                    <FormParking
                        handleSubmit={this.handleSubmitParkingForm}
                        handleOnChange={this.onChange}
                    />
                    <div className="container">
                        {this.state.listParking.map(
                            item => <Parking
                                key={generateId()}
                                truck={item.truck}
                                defaultCar={item.defaultCar}
                                disabledCar={item.disableCar}
                            /> )}
                    </div>

                </div>
            </div>
        );
    }

}


App.propTypes = {
    listParking: React.PropTypes.array,
    totalCars  : React.PropTypes.array
};


