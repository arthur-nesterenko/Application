import React from "react";


export default () => (
    <form className="form-horizontal">

        <div className="form-block">
            <label>Name of parking</label>
            <input type="text" name="name"/>
        </div>

        <div className="form-block">
            <label>Total place</label>
            <input type="text" name="total"/>
        </div>

        <div className="form-block">
            <label>place for Truck</label>
            <input type="text" name="truck"/>
        </div>

        <div className="form-block">
            <label>place for sedan car</label>
            <input type="text" name="sedan"/>
        </div>

        <div className="form-block">
            <label>place for disable car</label>
            <input type="text" name="disable"/>
        </div>

        <div className="form-block">
            <button className="btn btn-primary">Create</button>
        </div>

    </form>
);