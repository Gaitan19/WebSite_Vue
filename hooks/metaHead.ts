import { useHead } from 'nuxt/app'

export function metaHead (title = '', description: string) {
  return useHead({
    title: `SMBS | ${title}`,
    meta: [
      {
        name: 'description',
        content: description ?? 'SMBS official web - Made with Nuxt💚'
      }
    ]
  })
}
