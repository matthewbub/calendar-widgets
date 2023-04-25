import React from 'react';
import styles from './styles.module.css';

const ArgDescriptor = ({ name, type, children, required = false }) => {
  return (
    <dl className='flex-wrap'>
      <dt className='sr-only'>Name</dt>
      <dd className={styles['arg-description--name']}>
        {name && name.length > 0 && (<code className={styles['arg-description--code']}>{name}</code>)}
      </dd>
      <dt className='sr-only'>Type</dt>
      <dd className={styles['arg-description--types']}>
        {type && type.length > 0 && (
          <span className={styles['arg-description--type']}>
            {type}
          </span>
        )}
        {!required && (
          <span className={styles['arg-description--required']}>
            &nbsp;(optional)
          </span>
        )}
      </dd>
      <dt className='sr-only'>Description</dt>
      <dd className={styles['arg-description--description']}>
        {children}
      </dd>
    </dl>
  )
}

export default ArgDescriptor;