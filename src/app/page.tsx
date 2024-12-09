/*"use client";

import { useEffect, useState } from "react";
import axios from "axios";

type Repo = {
  id: number;
  name: string;
  html_url: string;
};

export default function Home() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    axios
      .get<Repo[]>("https://api.github.com/users/BryanGT/repos")
      .then((res) => setRepos(res.data))
      .catch((error) => console.error("Error fetching repos:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold my-6">Mi Portafolio</h1>

      <h2 className="text-xl font-bold mt-4">Mis Repositorios:</h2>
      <div className="w-full max-w-lg">
        {repos.map((repo) => (
          <div key={repo.id} className="my-2">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-200 text-center p-4 rounded-lg hover:bg-gray-300 transition"
            >
              {repo.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}*/


import React from "react";
import ReposServer from "@/components/ReposServer";
import AboutMeServer from "@/components/AboutMeServer";
import Menu from "@/components/Menu";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-700 flex flex-col items-center p-6">
      <Menu />
      <h1 className="text-3xl font-bold my-6">Mi Portafolio</h1>
      <AboutMeServer />
      <ReposServer />
    </div>
  );
}
