import React from 'react';
import './styles.css';

type Props = {
  text: String;
}

const ButtonIcon = ({ text }: Props) => {
  return (
      <button type="submit" className="btn-icon">
            {text}
      </button>
  );
}

export default ButtonIcon