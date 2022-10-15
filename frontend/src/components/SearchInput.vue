<template>
  <input
    type="text"
    class="form-control"
    :placeholder="_i18n('search')"
    @input="_onSearchInput($event.target.value)"
  />
  <div class="dropdown-menu">
    <i class="hasNoResults">No matching results</i>
    <div class="list-autocomplete">
      <button v-for="medicine in fetchedMedicines" :key="medicine.slug_name" type="button" class="dropdown-item" >
          {{ medicine.name }}
      </button>
        <!--<button type="button" class="dropdown-item">Medicine Name (medicine slug name)</button>-->
    </div>
    <button type="button" class="btn-extra">Custom button</button>
  </div>
</template>

<script>
import Session from "@/core/session";
import { getMedicines } from "@/endpoints/medicines";

export default {
  name: "SearchInput",
  data: () => {
    return {
      value: "",

      _searching: false,

      _session: Session,
    };
  },
  computed: {
    fetchedMedicines:  async function() {
      console.log(await getMedicines(this.value))
    }
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
      fetchedMedicines
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
