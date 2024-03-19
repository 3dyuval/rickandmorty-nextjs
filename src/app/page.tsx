import { api, EpisodeType } from '@/utils/rickandmortyapi'
import Episode from "@/_components/episode"
import { redirect } from "next/navigation"


const MAX_EPISODES = 51


export default async function Page({params, searchParams}: any) {

  let episode = searchParams['episode']

  if (episode > MAX_EPISODES) {
    redirect('404')
  }

  if (!episode) {
     episode = Math.round(Math.random() * MAX_EPISODES)
  }
  const episodeData = (await api.get(`/episode/${episode}`)).data as EpisodeType

  return <Episode episode={episodeData}/>
}