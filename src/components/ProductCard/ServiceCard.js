import React from 'react';
import * as styles from './ServiceCard.module.css';

import Button from '../Button';

const ServiceCard = ({ data }) => {
  return (
    <div className={styles.root}>
      <div className={styles.imageContainer}>
        <img src={data.image} alt={data.title} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{data.title}</h3>
        <p className={styles.description}>{data.description}</p>
        <Button fullWidth level={'primary'}>
          LEARN MORE
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;