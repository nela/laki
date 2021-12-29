import sveltePreprocess from 'svelte-preprocess'

export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess(),
  kit: {
    // ... ignore the stuff here

    // Add this part. ---
    vite: {
      ssr: {
        noExternal: [/^@material\//, /^@smui(?:-extra)?\//],
      },
    },
    // All done! ---
  },
}
