'use strict';
import React             from 'react';
import FormParking from './components/FormParking';
/**
 *
 */
export default class App extends React.Component {

    constructor( props ) {
        super( props );
        this.state = {
            totalParking: [],
            totalCars   : []
        }
        ;

        this.handleSubmitParkingForm = this.handleSubmitParkingForm.bind( this );
    }

    onChange( e ) {
        console.info( 'name', e.target.name, 'value', e.target.value );
    }

    handleSubmitParkingForm( e ) {
        e.preventDefault();
        console.info( e );
    }


    render() {
        return (
            <div>
                <h1>Parking system</h1>
                <div>
                    <FormParking
                        handleSubmit={this.handleSubmitParkingForm}
                        handleOnChange={this.onChange}
                    />
                    <div className="container">
                        dsd
                    </div>

                </div>
            </div>
        );
    }

}


App.propTypes = {
    totalParking: React.PropTypes.array,
    totalCars   : React.PropTypes.array
};


