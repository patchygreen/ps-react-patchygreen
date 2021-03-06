import React from 'react';
import PropTypes from 'prop-types';
import { getWidthAsPercentOfTotalWidth } from '../../utils/percentUtils';

class ProgressBar extends React.Component {

  // what color should the bar be?
  getColor = (percent) => {
    if (this.props.percent === 100) return 'green';
    return this.props.percent > 50 ? 'lightgreen' : 'red';
  };

  // render your HTML
  render() {
    const {percent, width, height} = this.props;
    return (
      <div style={{border: 'solid 1px lightgray', width:width}}>
        <div style={{
          width: getWidthAsPercentOfTotalWidth(),
          height,
          backgroundColor: this.getColor(percent)
        }}>
        </div>
      </div>
    );
  }
}

ProgressBar.propTypes = {
  /** Percent of progress completed. */
  percent: PropTypes.number.isRequired,

  /** Bar width */
  width: PropTypes.number.isRequired,

  /** Bar height*/
  height: PropTypes.number
};

ProgressBar.defaultProps = {
  height: 5
};

export default ProgressBar;
