import React, { PropTypes } from 'react';
import classNames from 'classnames';

const IcHome = ({ size, className, style }) =>
  <svg
    width={size}
    height={size}
    viewBox="0 0 30 30"
    style={{ ...style, width: size, height: size }}
    className={classNames('Icon Icon--IcHome', className)}>
    <path d="M29.643 14.35L15.717 2.28c-.396-.407-1.22-.334-1.488-.002L.352 14.355a1.039 1.039 0 0 0-.098 1.459c.361.415 1.047.463 1.458.102l1.41-1.23v13.657c0 .57.464 1.035 1.035 1.035h7.212c.57 0 1.033-.464 1.033-1.035v-6.826h5.149v6.826c0 .57.465 1.035 1.036 1.035h7.21c.571 0 1.035-.464 1.035-1.035V14.668l1.454 1.247c.416.358 1.107.306 1.46-.102.182-.21.27-.476.251-.752a1.03 1.03 0 0 0-.354-.71zm-11.056 5.093H11.37c-.57 0-1.036.465-1.036 1.037v6.828h-5.14V12.883l9.78-8.51 9.79 8.511v14.424H19.62V20.48c0-.572-.463-1.037-1.032-1.037z" />
  </svg>;

IcHome.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object
};

IcHome.defaultProps = {
  size: 25
};

export default IcHome;
