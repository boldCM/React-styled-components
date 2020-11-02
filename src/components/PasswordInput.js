/**
 * Exercise
 * Change the background-color of the input based
 * on the length of the password
 * At a length of 0-4 it should be a red to orange
 * At a length of around 10 it should become green
 * It should never become blue, so stop at green
 */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

function PasswordLength(PasswordInput) {
  if (PasswordInput.value.length < 5) {
    return 'red';
  }
  if (PasswordInput.value.length < 9) {
    return 'orange';
  }
  if (PasswordInput.value.length > 9) {
    return 'green';
  }
}

const Input = styled.input`
  background: ${() => PasswordLength};
`;

const PasswordInput = ({ value, onChange }) => {
  const [password, setPassword] = useState(value);
  useEffect(() => {
    onChange(password);
  }, [password]);
  return (
    <Input
      type="password"
      value={password}
      onChange={(event) => setPassword(event.target.value)}
    />
  );
};
PasswordInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
PasswordInput.defaultProps = {
  value: '',
};
export default PasswordInput;
