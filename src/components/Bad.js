import React from 'react';
import classes from '../components/Bad.module.css';

export function Bad(props) {
  return (
    <section
      className={`${classes.bad} relative border-solid border-0 border-l-4 border-red-500 bg-gray-100 p-5 rounded-r flex align-middle justify-center`}
      {...props}
    >
      <svg className="block absolute top-12 left-12" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="11.5" fill="#FEE2E2" stroke="#DC2626"/>
        <path d="M8.03033 6.96967C7.73744 6.67678 7.26256 6.67678 6.96967 6.96967C6.67678 7.26256 6.67678 7.73744 6.96967 8.03033L10.9393 12L6.96967 15.9697C6.67678 16.2626 6.67678 16.7374 6.96967 17.0303C7.26256 17.3232 7.73744 17.3232 8.03033 17.0303L12 13.0607L15.9697 17.0303C16.2626 17.3232 16.7374 17.3232 17.0303 17.0303C17.3232 16.7374 17.3232 16.2626 17.0303 15.9697L13.0607 12L17.0303 8.03033C17.3232 7.73744 17.3232 7.26256 17.0303 6.96967C16.7374 6.67678 16.2626 6.67678 15.9697 6.96967L12 10.9393L8.03033 6.96967Z" fill="#DC2626"/>
      </svg>

    </section>
  );
}
