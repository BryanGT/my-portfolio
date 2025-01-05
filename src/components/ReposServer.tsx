import ReposClient from "./ReposClient";

type Repo = {
  id: number;
  name: string;
  html_url: string;
};

async function fetchRepos(): Promise<Repo[]> {
  const apiUrl = process.env.NEXT_PUBLIC_GITHUB_API_URL;
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;

  if (!apiUrl || !username) {
    throw new Error("Las variables de entorno para GitHub no están configuradas");
  }

  //const res = await fetch("https://api.github.com/users/BryanGT/repos");
  const res = await fetch(`${apiUrl}/${username}/repos`);
  if (!res.ok) {
    throw new Error("Error al obtener los repositorios");
  }
  return res.json();
}

export default async function ReposServer() {
  const repos = await fetchRepos();

  return (
    <ReposClient repos={repos} />
  );
}
