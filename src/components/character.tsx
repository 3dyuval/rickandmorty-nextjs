import type { CharacterType } from '@/utils/rickandmortyapi'


type Props = {character: CharacterType}

export default function Character({character}: Props) {


  return (
    <div className="my-4">
      <img src={character.image} alt={character.name} />
      <h1>{character.name}</h1>
      <p>{character.status}</p>
      <p>{character.species}</p>
      <p>{character.type}</p>
    </div>)
}