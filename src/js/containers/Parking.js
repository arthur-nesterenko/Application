import React  from 'react';
import Place from '../components/Place';
import { generateId } from '../Helpers/generateId';

/**
 *
 */
export default  class Parking extends React.PureComponent {

    constructor( props ) {
        super( props );

        this.state = {
            total       : props.truck + props.defaultCar + props.disabledCa,
            truck       : props.truck,
            defaultCar  : props.defaultCar,
            disabledCar : props.disabledCar,
            totalBusy   : 0,
            disabledBusy: 0,
            invalidBusy : 0,
            truckBusy   : 0,
            belong      : []
        };
        this.generatePlaces = this.generatePlaces.bind( this );
    }

    generatePlaces() {
        let place = [];
        while (this.state.truck--) {

            place.push( {
                type: 'truck'
            } );
        }
        while (this.state.disabledCar--) {
            place.push( { type: 'disableCar' } );
        }
        while (this.state.defaultCar--) {
            place.push(
                {
                    type: 'defaultCar'
                } );
        }

        return place;
    }

    render() {
        let places = this.generatePlaces();

        return (
            <div>
                <h1 className="text-center text-uppercase">Parking {this.props.name}</h1>

                <div id={this.props.name} className='parking'>
                    {places.map( ( item, index ) => <Place key={ generateId() }
                                                           type={item.type}
                                                           number={index}/> ) }
                </div>
            </div>
        );
    }

}

Parking.propTypes = {
    total      : React.PropTypes.number,
    ruck       : React.PropTypes.number,
    defaultCar : React.PropTypes.number,
    disabledCar: React.PropTypes.number
};

