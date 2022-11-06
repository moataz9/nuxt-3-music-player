export default defineNuxtPlugin(() => {
  const audio = new Audio()
  return {
    provide: { audio },
  }
})
