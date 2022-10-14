<template>
  <input
    type="text"
    class="form-control"
    :placeholder="_i18n('search')"
    @input="_onSearchInput($event.target.value)"
  />
</template>

<script>
import Session from "@/core/session";

export default {
  name: "Search",
  props: {
    search: {
      default: false,
    },
    search_type: {
      default: "medicine",
    },
  },
  data: () => {
    return {
      _searching: false,
      search: "",

      _session: Session,
    };
  },
  methods: {
    _onSearchInput: function (search) {
      console.log(`searching ${this.search_type} for '${search}'...`);
      this.search = search;
    },

    _i18n: function (i18n_id) {
      const internationalization = {
        english: {
          search: "Search",
        },
        spanish: {
          search: "Buscar",
        },
      };
      return internationalization[this._session.language][i18n_id];
    },
  },
};
</script>
