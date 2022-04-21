import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './ErrorModal.module.css';

const ErrorModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop}>
        <Card className={styles.modal}>
          <header className={styles.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={styles.content}>
            <p>{props.message}</p>
          </div>
          <footer className={styles.actions}>
            <Button>Okay</Button>
          </footer>
        </Card>
      </div>
    </div>
  );
};

export default ErrorModal;
