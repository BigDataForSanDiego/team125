<template>
  <div class="home h-100">
    <Navbar />

    <div class="h-100 p-5 d-flex flex-column">
      <p class="description mt-3 p-4 flex-fill text-center">
        A Progressive Web Application enabling individuals to compare cost of medication
        and medical services; while analyzing trends to improve decision making for the
        consumer and provider.
      </p>

      <ul class="m-3 nav nav-pills justify-content-center">
        <li class="px-1 nav-item">
          <a
            class="nav-link"
            :class="{ active: _looking_for == 'medicine' }"
            @click="_setLookingFor('medicine')"
          >
            Medicine
          </a>
        </li>
        <li class="px-1 nav-item">
          <a
            class="nav-link"
            :class="{ active: _looking_for == 'services' }"
            @click="_setLookingFor('services')"
          >
            Services
          </a>
        </li>
      </ul>

      <div class="flex-fill">
        <div class="search-input input-group mb-3">
          <Search ref="search" />
          <button
            class="btn btn-outline-success"
            type="button"
            id="Search"
            @click="_onCompareClick"
          >
            Compare
          </button>
        </div>
      </div>

      <p class="text-center">
        <a
          class="btn"
          href="https://github.com/BigDataForSanDiego/team125#2022-big-data-hackathon-proposal-form"
          role="button"
          >ABOUT US</a
        >
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

export default {
  name: "HomeView",
  components: {
    Navbar,
    Search,
  },
  data: function () {
    return {
      _looking_for: "medicine",
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
