/**
 * Created by root on 01.04.17.
 */
import  React from 'react';


export default  ( { type, number } ) => (
    <div
        className={ `place place-${type}`}
    >
        <span>{number}</span>
    </div>
);