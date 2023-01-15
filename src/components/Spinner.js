import React from "react";
import spinner from "../assets/spinner.gif";
export const Spinner = () => {
  return (
    <div className='w-100 mt-20'>
      <img src={spinner} width={190} alt='spinning gif' />
    </div>
  );
};
