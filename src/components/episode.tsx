import type { EpisodeType } from "@/utils/rickandmortyapi";

type Props = {
    episode: EpisodeType
}

export default function Episode ({ episode }: Props) {

  return (
    <div>
      <h1>{episode.name}</h1>
      <p>{episode.air_date}</p>
      <p>{episode.episode}</p>
      <ul>
        {episode.characters.map((character, index) => (
          <li key={index}>{character}</li>
        ))}
      </ul>
    </div>
  )
}