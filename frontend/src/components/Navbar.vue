<template>
  <nav class="navbar navbar-light bg-light fixed-top">
    <div v-if="_searching" class="container-fluid">
      <div class="input-group">
        <Search />
        <button class="btn btn-outline-success" type="button" id="Compare">
          {{ _i18n("compare") }}
        </button>
        <button
          class="btn btn-outline-danger"
          type="button"
          id="Cancel"
          @click="stopSearch"
        >
          <i class="bi bi-x"></i>
        </button>
      </div>
    </div>
    <div v-else class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="img/icons/favicon.svg"
          alt=""
          width="32"
          height="32"
          class="d-inline-block align-text-top"
        />
        <span class="text-success">Open</span>
        <span class="text-danger">Heart</span>
      </a>

      <form class="d-flex">
        <button
          v-if="search"
          type="button"
          class="px-3 mx-1 btn rounded-circle"
          @click="startSearch"
        >
          <i class="bi bi-search"></i>
        </button>
        <select
          class="form-select"
          id="language"
          @change="_onLanguageChange($event.target.value)"
        >
          <option value="english" :selected="_session.language == 'english'">
            English
          </option>
          <option value="spanish" :selected="_session.language == 'spanish'">
            Español
          </option>
        </select>
      </form>
    </div>
  </nav>
</template>

<script>
import Search from "@/components/Search.vue";

import Session from "@/core/session";

export default {
  name: "Navbar",
  components: {
    Search,
  },
  props: {
    search: {
      default: true,
    },
  },
  data: () => {
    return {
      _searching: false,

      _session: Session,
    };
  },
  methods: {
    startSearch: function () {
      this._searching = true;
    },
    stopSearch: function () {
      this._searching = false;
    },

    _onLanguageChange: function (language) {
      Session.set_language(language);
      location.reload();
    },

    _i18n: function (i18n_id) {
      const internationalization = {
        english: {
          compare: "Compare",
        },
        spanish: {
          compare: "Comparar",
        },
      };
      return internationalization[this._session.language][i18n_id];
    },
  },
};
</script>
