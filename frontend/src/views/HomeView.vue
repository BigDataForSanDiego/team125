<template>
  <div class="home h-100">
    <Navbar />

    <div class="h-100 p-5 d-flex flex-column">
      <i class="description mt-3 p-4 flex-fill text-center">{{ _i18n("description") }}</i>

      <ul class="m-3 nav nav-pills justify-content-center">
        <li class="px-1 nav-item">
          <a
            class="nav-link"
            :class="{ active: _looking_for == 'medicine' }"
            @click="_setLookingFor('medicine')"
          >
            <i class="bi bi-capsule"></i> {{ _i18n("medicine") }}
          </a>
        </li>
        <li class="px-1 nav-item">
          <a
            class="nav-link"
            :class="{ active: _looking_for == 'services' }"
            @click="_setLookingFor('services')"
          >
            <i class="bi bi-hospital"></i> {{ _i18n("services") }}
          </a>
        </li>
      </ul>

      <div class="flex-fill">
        <div class="search-input input-group mb-3">
          <Search ref="search" />
          <button
            class="btn btn-outline-success bg-white"
            type="button"
            id="Search"
            @click="_onCompareClick"
          >
            {{ _i18n("compare") }}
          </button>
        </div>
      </div>

      <p class="text-center">
        <a
          class="btn"
          href="https://github.com/BigDataForSanDiego/team125#2022-big-data-hackathon-proposal-form"
          role="button"
        >
          {{ _i18n("about") }}
        </a>
        <a class="btn" href="https://github.com/BigDataForSanDiego/team125" role="button">
          <i class="bi bi-github"></i>
        </a>
      </p>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Search from "@/components/Search.vue";

import Session from "@/core/session";

export default {
  name: "HomeView",
  components: {
    Navbar,
    Search,
  },
  data: function () {
    return {
      _looking_for: "medicine",

      _session: Session,
    };
  },
  methods: {
    _setLookingFor: function (looking_for) {
      this._looking_for = looking_for;
    },
    _onCompareClick: function () {
      this.$router.push({
        path: "/listing",
        query: {
          search_type: this._looking_for,
          search: this.$refs.search.search,
        },
      });
    },

    _i18n: function (i18n_id) {
      const internationalization = {
        english: {
          description:
            "A Progressive Web Application enabling individuals to compare cost of medication and medical services;while analyzing trends to improve decision making for the consumer and provider.",
          medicine: "Medicine",
          services: "Services",
          compare: "Compare",
          about: "ABOUT US",
        },
        spanish: {
          description:
            "Una aplicación web progresiva que permite a las personas comparar el costo de los medicamentos y los servicios médicos; mientras analiza tendencias para mejorar la toma de decisiones para el consumidor y el proveedor.",
          medicine: "Medicamento",
          services: "Servicios",
          compare: "Comparar",
          about: "SOBRE NOSOTROS",
        },
      };
      return internationalization[this._session.language][i18n_id];
    },
  },
};
</script>

<style>
.nav-link {
  cursor: pointer;
}

@media (min-width: 576px) {
  .description,
  .search-input {
    width: 50%;
    margin: auto;
  }
}

@media (min-width: 992px) {
  .description,
  .search-input {
    width: 25%;
    margin: auto;
  }
}
</style>
