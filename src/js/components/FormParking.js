import React from 'react';
import TextInput from '../containers/TextInput';


export default ( { handleSubmit, handleOnChange } ) => (
    <form className="form-horizontal" onSubmit={handleSubmit}>

        <div className="form-block">
            <label>Name of parking</label>
            <TextInput
                uniqueName="name"
                text="Name"
                required={true}
                type="string"
                onChange={handleOnChange}
                errorMessage="Field must be fill"
            />
        </div>

        <div className="form-block">
            <label>Total place</label>
            <TextInput
                uniqueName="total"
                text="Total place"
                required={true}
                type="number"
                onChange={handleOnChange}
                errorMessage="Field must be fill"
            />
        </div>

        <div className="form-block">
            <label>Place for truck</label>
            <TextInput
                uniqueName="truck"
                text="Place for truck"
                required={true}
                type="number"
                onChange={handleOnChange}
                errorMessage="Field must be fill"
            />
        </div>

        <div className="form-block">
            <label>Place for sedan car</label>
            <TextInput
                uniqueName="defaultCar"
                text="Place for sedan car"
                required={true}
                type="number"
                onChange={handleOnChange}
                errorMessage="Field must be fill"
            />
        </div>

        <div className="form-block">
            <label>Place for disable car</label>
            <TextInput
                uniqueName="disableCar"
                text="Place for disable car"
                required={true}
                type="number"
                onChange={handleOnChange}
                errorMessage="Field must be fill"
            />
        </div>

        <div className="form-block">
            <button type="submit" className="btn btn-primary">Create</button>
        </div>

    </form>
);