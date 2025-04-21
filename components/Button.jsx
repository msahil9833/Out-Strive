import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
  text,
  href,
  variant = 'primary',
  className = '',
  dataAos,
  icon: Icon,
}) => {
  const buttonClass = `${
    variant === 'primary' ? 'primary' : 'secondary'
  } ${className}`;

  return (
    <button className={buttonClass} data-aos={dataAos}>
      <Link to={href}>{text}</Link>
      {Icon && <Icon className="icon-class" />}
    </button>
  );
};

export default Button;
