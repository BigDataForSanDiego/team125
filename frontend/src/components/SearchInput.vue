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
  name: "SearchInput",
  data: () => {
    return {
      value: "",

      _searching: false,

      _session: Session,
    };
  },
  methods: {
    search: function (category, search) {
      this.$router.push({
        path: "/listing",
        query: {
          category: category,
          search: search,
        },
      });
    },

    _onSearchInput: function (new_value) {
      this.value = new_value;
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
