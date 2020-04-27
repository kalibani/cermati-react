/* eslint-disable react/jsx-props-no-spreading */
// Input Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

const Input = ({
  color,
  size,
  id,
  type,
  name,
  value,
  placeholder,
  maxLength,
  autoComplete,
  tabIndex,
  weight,
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
  disabled,
  input,
  rows,
  style
}) => {
  const className = classname('a-input', color, size, weight);
  return (
    <>
      {type === 'textarea' && (
        <textarea
          className={className}
          id={id}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          maxLength={maxLength}
          autoComplete={autoComplete}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
          tabIndex={tabIndex}
          rows={rows}
          disabled={disabled}
          style={style}
          {...input}
        />
      )}
      {type !== 'textarea' && (
        <input
          className={className}
          id={id}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          maxLength={maxLength}
          autoComplete={autoComplete}
          tabIndex={tabIndex}
          disabled={disabled}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
          {...input}
        />
      )}
    </>
  );
};

Input.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.oneOf([
    'text',
    'password',
    'email',
    'number',
    'textarea'
  ]),
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  autoComplete: PropTypes.oneOf(['on', 'off']),
  tabIndex: PropTypes.string,
  weight: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  rows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  disabled: PropTypes.bool,
  input: PropTypes.object,
  colorLine: PropTypes.string,
  style: PropTypes.object
};

Input.defaultProps = {
  color: '',
  size: '',
  id: '',
  type: 'text',
  name: '',
  value: '',
  placeholder: '',
  maxLength: '',
  autoComplete: 'on',
  tabIndex: '0',
  weight: '',
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  onKeyDown: () => {},
  input: {},
  rows: '2',
  disabled: false,
  colorLine: 'grey50',
  style: {}
};

export default Input;
