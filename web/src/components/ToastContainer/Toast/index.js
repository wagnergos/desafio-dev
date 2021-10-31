import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useToast } from '../../../context/ToastContext';

import { Container } from './styles';

export default function Toast({ message }) {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.id]);

  return (
    <Container type={message.type} hasDescription={!!message.description}>
      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button type="button" onClick={() => removeToast(message.id)}>
        x
      </button>
    </Container>
  );
}

Toast.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string,
    description: PropTypes.string,
  }),
};

Toast.defaultProps = {
  message: {
    type: 'success',
    description: '',
  },
};
