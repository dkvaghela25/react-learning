import React from 'react';

const GithubLink = ({link}) => {
  return (
    <a target='_blank' href={link}><button className='bg-black!'>Github Link</button></a>
  );
};

export default GithubLink;