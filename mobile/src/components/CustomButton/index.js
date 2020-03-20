import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MadeButton, TextButton } from './styles';

Icon.loadFont();

export default function CustomButton({ children, icon, ...rest }) {
  return (
    <MadeButton {...rest}>
      {icon && <Icon name={icon} size={20} color="#333" />}
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
};

CustomButton.defaultProps = {
  icon: null,
};
