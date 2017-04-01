import React  from 'react';
/**
 *
 */
export default  class Parking extends React.PureComponent {

    constructor( props ) {
        super( props )

        this.state = {
            total       : props.total,
            countTruck  : 10,
            defaultCar  : 10,
            disabledCar : 10,
            totalBusy   : 0,
            disabledBusy: 0,
            invalidBusy : 0,
            truckBusy   : 0,
            belong      : []
        };


        render()
        {
            return (
                <div>Parking</div>
            );
        }
    }
}

Parking.propTypes = {
    total       : React.PropTypes.number,
    countTruck  : React.PropTypes.number,
    defaultCar  : React.PropTypes.number,
    disabledCar : React.PropTypes.number,
    totalBusy   : React.PropTypes.number,
    defaultBusy : React.PropTypes.number,
    disabledBusy: React.PropTypes.number,
    truckBusy   : React.PropTypes.number,
    belong      : React.PropTypes.array
};

