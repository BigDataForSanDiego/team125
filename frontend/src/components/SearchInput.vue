<template>
  <input
    type="text"
    class="form-control"
    :placeholder="_i18n('search')"
    @input="_onSearchInput($event.target.value)"
    @keyup="autoComplete"
  />
  <div class="dropdown-menu mt-5 w-100" :class="dropdownClass">
    <i class="hasNoResults">No matching results</i>
    <div class="list-autocomplete">
      <button v-for="medicine in fetchedMedicines" :key="medicine.slug_name" type="button" class="dropdown-item">
          {{ medicine.name }}
      </button>
    </div>
  </div>
</template>

<script>
import Session from "@/core/session";
import { getMedicines } from "@/endpoints/medicines";
import "@/css/search-bar.css";

export default {
  name: "SearchInput",
  data: () => {
    return {
      value: "",

      fetchedMedicines: [],

      _searching: false,

      _session: Session,
      
      dropdownClass: ""

    };
  },
  created() {
    this.autoComplete();
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

    autoComplete: function(){
      if (this.value == ""){
        this.fetchedMedicines = []
        this.dropdownClass = ""
      }
      getMedicines(this.value).then((response) => {this.fetchedMedicines = response.data; this.dropdownClass = "show"})
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
