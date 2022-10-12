<template>
  <div class="home h-100">
    <Navbar />

    <div class="h-100 p-5 d-flex flex-column">
      <div class="pt-4 d-flex">
        <div class="flex-fill">
          <h3 class="text-capitalize">
            {{ this.$route.query.search }}
          </h3>
        </div>

        <select class="form-select m-auto" style="max-width: 192px">
          <option>Lowest price</option>
          <option>Home delivery</option>
        </select>
      </div>
      <hr />
      <div class="flex-fill">
        <div class="text-center">
          <i class="bi bi-emoji-frown" style="font-size: 128px"></i>
          <h1>Sorry, nothing found...</h1>
          <h2>try searching for another name or variant</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "ListingView",
  components: {
    Navbar,
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
