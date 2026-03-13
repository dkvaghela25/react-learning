import React from 'react';

const GithubLink = ({link}) => {
  return (
    <a target='_blank' href={link || "https://github.com/dkvaghela25/react-learning.git"}><button className='bg-black!'>Github Link</button></a>
  );
};

export default GithubLink;