"use client";

import LikeButton from "./LikeButton";
import Image from 'next/image'

type GitHubUser = {
  avatar_url: string;
  name: string;
  bio: string;
  html_url: string;
};

type Props = {
  user: GitHubUser;
};

export default function AboutMeClient({ user }: Props) {
  return (
    <div className="w-full max-w-lg bg-gray-400 p-6 rounded-lg shadow-md text-center">
      <img
        src={user.avatar_url}
        alt={`${user.name} avatar`}
        className="w-24 h-24 rounded-full mx-auto"
      />
      <h2 className="text-2xl font-bold mt-4">{user.name}</h2>
      <p className="text-gray-600 mt-2">{user.bio}</p>
      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600"
      >
        Ver perfil en GitHub
      </a>
      <LikeButton />
    </div>
  );
}
