"use client";

import React from "react";

type Repo = {
  id: number;
  name: string;
  html_url: string;
};

type Props = {
  repos: Repo[];
};

export default function ReposClient({ repos }: Props) {
  return (
    <div className="w-full max-w-lg">
      <h2 className="text-xl font-bold mt-4">Mis Repositorios:</h2>
      {repos.map((repo) => (
        <div key={repo.id} className="my-2">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-500 text-center p-4 rounded-lg hover:bg-gray-400 transition"
          >
            {repo.name}
          </a>
        </div>
      ))}
    </div>
  );
}
