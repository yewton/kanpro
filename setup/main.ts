import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(({ app, router }) => {
  router.options.history = router.options.history.createHistory('#')
})