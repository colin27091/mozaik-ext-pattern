import React, { Component } from 'react'
import PropTypes from 'prop-types';
import classNames                      from 'classnames'
import d3                              from 'd3/d3'
import moment                          from 'moment'
import timezone                        from 'moment-timezone'


class Clock extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="widget__header">
                    <span>
                        <span className="widget__header__subject">{this.props.title}</span>
                    </span>
                    <span className="widget__header__count"></span>
                </div>
                <div className="widget__body">
                </div>
            </div>
        );
    }
}

Clock.displayName = 'Clock';

Clock.propTypes = {
};




export default Clock;
