<template>
  <div class="home h-100">
    <Navbar />

    <div class="h-100 p-5 d-flex flex-column">
      <i class="description mt-3 p-4 flex-fill text-center">{{ _i18n("description") }}</i>

      <ul class="m-3 nav nav-pills justify-content-center">
        <li class="px-1 nav-item">
          <a
            class="nav-link"
            :class="{ active: _category == 'medicine' }"
            @click="_setLookingFor('medicine')"
          >
            <i class="bi bi-capsule"></i> {{ _i18n("medicine") }}
          </a>
        </li>
        <li class="px-1 nav-item">
          <a
            class="nav-link"
            :class="{ active: _category == 'services' }"
            @click="_setLookingFor('services')"
          >
            <i class="bi bi-hospital"></i> {{ _i18n("services") }}
          </a>
        </li>
      </ul>

      <div class="flex-fill">
        <div class="search-input input-group mb-3">
          <SearchInput ref="searchinput" />
          <button
            class="btn btn-outline-success bg-white"
            type="button"
            @click="_onCompareClick"
          >
            {{ _i18n("compare") }}
          </button>
        </div>

        <div v-if="_category == 'medicine'" class="text-center">
          {{ _i18n("popular") }} <br />
          <div class="m-1">
            <button
              type="button"
              class="mx-1 btn btn-outline-primary bg-white btn-sm"
              @click="search(_category, 'omega-3')"
            >
              Omega-3
            </button>
            <button
              type="button"
              class="btn btn-outline-primary bg-white btn-sm"
              @click="search(_category, 'riomet')"
            >
              Riomet
            </button>
          </div>
        </div>

        <div v-if="_category == 'services'" class="text-center">
          {{ _i18n("popular") }}
          <div class="m-1">
            <button
              type="button"
              class="mx-1 btn btn-outline-primary bg-white btn-sm"
              @click="search(_category, 'covid-19 test')"
            >
              {{ _i18n("covid") }}
            </button>
            <button
              type="button"
              class="btn btn-outline-primary bg-white btn-sm"
              @click="search(_category, 'skin care')"
            >
              {{ _i18n("skin") }}
            </button>
          </div>
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
import SearchInput from "@/components/SearchInput.vue";

import Session from "@/core/session";

export default {
  name: "HomeView",
  components: {
    Navbar,
    SearchInput,
  },
  data: function () {
    return {
      _category: "medicine",

      _session: Session,
    };
  },
  methods: {
    search: function (category, search) {
      this.$refs.searchinput.search(category, search);
    },

    _setLookingFor: function (looking_for) {
      this._category = looking_for;
    },
    _onCompareClick: function () {
      this.search(this._category, this.$refs.searchinput.value);
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
          popular: "Popular Searches:",
          covid: "COVID-19 Test",
          skin: "Skin Care",
        },
        spanish: {
          description:
            "Una aplicación web progresiva que permite a las personas comparar el costo de los medicamentos y los servicios médicos; mientras analiza tendencias para mejorar la toma de decisiones para el consumidor y el proveedor.",
          medicine: "Medicamento",
          services: "Servicios",
          compare: "Comparar",
          about: "SOBRE NOSOTROS",
          popular: "Búsquedas Populares:",
          covid: "Prueba COVID-19",
          skin: "Skin Care",
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
