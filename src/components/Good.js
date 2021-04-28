import React from 'react';
const divStyle = {
  minHeight: '200px',
};
export function Good(props) {
  return (
    <section 
      className="relative border-solid border-0 border-l-4 border-green-500 bg-gray-100 p-5 rounded-r flex align-middle justify-center" 
      style={divStyle}
      {...props} 
    >
      <svg className="block absolute top-12 left-12" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="11.5" fill="#F0FDF4" stroke="#15803D"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0068 8.44713C17.3121 8.72703 17.3328 9.20145 17.0529 9.50679L11.5529 15.5068C11.4146 15.6576 11.2208 15.7454 11.0163 15.7498C10.8118 15.7543 10.6143 15.675 10.4697 15.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697C7.76256 11.1768 8.23744 11.1768 8.53033 11.4697L10.9764 13.9158L15.9471 8.4932C16.227 8.18786 16.7015 8.16724 17.0068 8.44713Z" fill="#15803D"/>
      </svg>

    </section>
  );
}
