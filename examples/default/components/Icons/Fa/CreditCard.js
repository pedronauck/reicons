import React, { PropTypes } from 'react';
import classNames from 'classnames';

const FaCreditCard = ({ size, className, style }) =>
  <svg
    width={size}
    height={size}
    viewBox="0 0 548.176 548.176"
    style={{ ...style, width: size, height: size }}
    className={classNames('Icon Icon--FaCreditCard', className)}>
    <path d="M534.754 68.238c-8.945-8.945-19.698-13.417-32.258-13.417H45.681c-12.562 0-23.313 4.471-32.264 13.417C4.471 77.185 0 87.936 0 100.499v347.173c0 12.566 4.471 23.318 13.417 32.264 8.951 8.946 19.702 13.419 32.264 13.419h456.815c12.56 0 23.312-4.473 32.258-13.419 8.945-8.945 13.422-19.697 13.422-32.264V100.499c0-12.563-4.477-23.314-13.422-32.261zm-23.127 379.441c0 2.478-.903 4.613-2.711 6.427-1.807 1.8-3.949 2.703-6.42 2.703H45.681c-2.473 0-4.615-.903-6.423-2.71-1.807-1.813-2.712-3.949-2.712-6.427V274.088h475.082v173.591zm0-283.23H36.545v-63.954c0-2.474.902-4.611 2.712-6.423 1.809-1.803 3.951-2.708 6.423-2.708h456.815c2.471 0 4.613.901 6.42 2.708 1.808 1.812 2.711 3.949 2.711 6.423v63.954h.001z" /><path d="M73.092 383.719h73.089v36.548H73.092zM182.728 383.719h109.634v36.548H182.728z" />
  </svg>;

FaCreditCard.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object
};

FaCreditCard.defaultProps = {
  size: 25
};

export default FaCreditCard;
