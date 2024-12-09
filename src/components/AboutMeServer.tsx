import React from "react";
import AboutMeClient from "./AboutMeClient";

type GitHubUser = {
  avatar_url: string;
  name: string;
  bio: string;
  html_url: string;
};

async function fetchGitHubUser(): Promise<GitHubUser> {
  const apiUrl = process.env.NEXT_PUBLIC_GITHUB_API_URL;
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;

  if (!apiUrl || !username) {
    throw new Error("Las variables de entorno para GitHub no están configuradas");
  }

  //const res = await fetch("https://api.github.com/users/BryanGT");
  const res = await fetch(`${apiUrl}/${username}`);

  if (!res.ok) {
    throw new Error("Error al obtener el perfil de GitHub");
  }
  return res.json();
}

export default async function AboutMeServer() {
  const user = await fetchGitHubUser();

  return <AboutMeClient user={user} />;
}
