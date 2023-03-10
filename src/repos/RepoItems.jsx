import React from "react";
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";
const RepoItems = ({ repo }) => {
  const {
    name,
    description,
    html_url,
    forks,
    open_issuess: open_issues,
    watchers_count,
    startgazers_count,
  } = repo;
  return (
    <div className='mb-2 rounded-md card bg-gray-800 hover:bg-gray-900'>
      <div className='card-body'>
        <h3 className='mb-2 text-xl font-semibold'>
          <a href={html_url}>
            <FaLink className='inline' /> {name}
          </a>
        </h3>
        <p className='mb-3'>{description}</p>
        <div className=''>
          <div className='mr-2 badge badge-info badge-lg'>
            <FaEye className='mr-2' /> {watchers_count}
          </div>

          <div className='mr-2 badge badge-sucess badge-lg'>
            <FaStar className='mr-2' /> {startgazers_count}
          </div>

          <div className='mr-2 badge badge-error badge-lg'>
            <FaInfo className='mr-2' /> {open_issues}
          </div>

          <div className='mr-2 badge badge-warning badge-lg'>
            <FaUtensils className='mr-2' /> {forks}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoItems;
