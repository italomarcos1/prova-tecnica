import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MadeButton, TextButton } from './styles';

Icon.loadFont();

export default function CustomButton({ children, icon, color, ...rest }) {
  return (
    <MadeButton {...rest}>
      {icon && <Icon name={icon} size={20} color={color} />}
      <TextButton>{children}</TextButton>
    </MadeButton>
  );
}

CustomButton.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

CustomButton.defaultProps = {
  loading: false,
};

CustomButton.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
};

CustomButton.defaultProps = {
  icon: null,
  color: null,
};
