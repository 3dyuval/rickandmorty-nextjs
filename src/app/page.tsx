import { api, CharacterType, EpisodeType } from '@/utils/rickandmortyapi'
import Episode from "@/components/episode"
import { redirect } from "next/navigation"
import Character from "@/components/character"
import axios from "axios"


const MAX_EPISODES = 51


export default async function Page({params, searchParams}: any) {

  let episodeId = searchParams['episode']

  if (episodeId > MAX_EPISODES) {
    redirect('404')
  }

  if (!episodeId) {
    episodeId = Math.round(Math.random() * MAX_EPISODES)
  }

  const episode = (await api.get(`/episode/${episodeId}`)).data as EpisodeType
  const characters = await Promise.all<{ data: CharacterType}>(episode.characters.map(axios.get))

  return <><Episode episode={episode} />
    {characters.map(({ data: character }, index) =>
        <Character key={index} character={character}/>)
    }
  </>
}