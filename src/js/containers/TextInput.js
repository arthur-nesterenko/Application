/**
 * Created by root on 01.04.17.
 */

import React from 'react';


const TextInput = React.createClass( {
    getInitialState: function () {

        return {
            isEmpty     : false,
            value       : null,
            valid       : false,
            errorMessage: 'Input is invalid',
            errorVisible: false
        };
    },

    handleChange: function ( e ) {
        this.validation( e.target.value );

        if ( this.props.onChange ) {
            this.props.onChange( e );
        }
    }

    ,

    validation: function ( value, valid ) {

        if ( typeof valid === 'undefined' ) {
            valid = true;
        }

        let message      = "",
            errorVisible = false;

        if ( !valid ) {

            message = this.props.errorMessage;
            valid = false;
            errorVisible = true;
        }

        else if ( this.props.required ) {
            message = this.props.errorMessage;
            valid = false;
            errorVisible = true;
        }
        if ( value.length === 0 ) {
            message = this.props.errorMessage;
            valid = false;
            errorVisible = true;
        }

//        if ( typeof value !== this.props.type ) {
//            message = this.props.errorMessage;
//            valid = false;
//            errorVisible = true;
//        }

        this.setState( {
            value       : value,
            valid       : valid,
            errorMessage: message,
            errorVisible: errorVisible
        } );

    }
    ,

    handleBlur: function ( e ) {

        const valid = typeof e.target.value === this.props.type;

//        this.validation( e.target.value, valid );
    }
    ,
    /**
     * only for input field
     */
    render    : function () {
        return (
            <div>
                <input
                    name={this.props.uniqueName}
                    placeholder={this.props.text}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    value={this.props.value}
                    data-required-type={this.props.type}
                />

                <p
                    className={this.state.errorVisible
                        ? 'error-text'
                        : 'hidden'}
                >{this.state.errorMessage}
                </p>
            </div>

        );

    }


} );


export default TextInput;