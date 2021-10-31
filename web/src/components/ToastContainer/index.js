import React from 'react';
import PropTypes from 'prop-types';

import Toast from './Toast';

import { Container } from './styles';

export default function ToastContainer({ messages }) {
  return (
    <Container>
      {messages.map(message => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
}

ToastContainer.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};
