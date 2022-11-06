import { mande as Mande } from 'mande'

export default defineNuxtPlugin(() => {
  const mande = Mande(`https://shazam-core.p.rapidapi.com/v1`, {
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY as string,
    },
  })
  return {
    provide: { mande },
  }
})
