import React from 'react';
import styles from './styles.module.css';

const ArgDescriptor = ({ name, type, children, required = false, style = {}, noBorderBottom }) => {
  let className = `${styles['arg-description--base']} ${styles['arg-description--description']}`;
  if (noBorderBottom) {
    className = `${styles['arg-description--base']} ${styles['arg-description--no-border-bottom']}`;
  }

  return (
    <dl className='flex-wrap' style={style}>
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
      <dd className={className}>
        {children}
      </dd>
    </dl>
  )
}

export default ArgDescriptor;