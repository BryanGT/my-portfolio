import React from 'react';

type LinkCardProps = {
  title: string;
  url: string;
};

const LinkCard: React.FC<LinkCardProps> = ({ title, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="block bg-gray-200 text-center p-4 my-2 rounded-lg hover:bg-gray-300 transition"
  >
    {title}
  </a>
);

export default LinkCard;
