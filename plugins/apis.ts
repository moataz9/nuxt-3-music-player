import { mande } from 'mande'

export default defineNuxtPlugin(() => {
  const shazam = mande(`https://shazam-core.p.rapidapi.com/v1`, {
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY as string,
    },
  })

  const ipregistry = mande(`https://api.ipregistry.co`, {
    headers: {
      Authorization: `ApiKey ${import.meta.env.VITE_IPREGISTRY_API_KEY}`,
    },
  })

  return {
    provide: { APIs: { shazam, ipregistry } },
  }
})
