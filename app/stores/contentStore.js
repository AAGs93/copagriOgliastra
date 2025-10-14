// stores/contentStore.js
import { defineStore, acceptHMRUpdate } from "pinia";
import { queryCollection } from "#imports"; // ✅ Import ufficiale di Nuxt Content 2.x+

export const useContentStore = defineStore("content", {
  state: () => ({
    posts: [],
    loading: false,
    error: null,
  }),

  getters: {
    allTags: (state) => {
      const tags = new Set();
      state.posts.forEach((post) => {
        post.tags?.forEach((tag) => tags.add(tag));
      });
      return Array.from(tags).sort();
    },

    getPostsByTag: (state) => (tag) => {
      if (!tag || tag === "Tutti") return state.posts;
      return state.posts.filter((p) => p.tags?.includes(tag));
    },
  },

  actions: {
    async fetchContent() {
      // Evita doppio caricamento
      if (this.posts.length > 0) return true;

      this.loading = true;
      this.error = null;

      try {
        const data = await queryCollection("blog").all();

        this.posts = Array.isArray(data) ? data : [];
        return true; // ✅ Evita errori di serializzazione SSR
      } catch (e) {
        console.error("Errore fetchContent:", e);
        this.error = e?.message || "Errore durante il caricamento";
        throw e;
      } finally {
        this.loading = false;
      }
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useContentStore, import.meta.hot));
}
