<template>
  <div class="home h-100">
    <Navbar />

    <div class="h-100 p-5 d-flex flex-column">
      <div class="d-flex bd-highlight">
        <div class="p-2 flex-grow-1 bd-highlight">Flex item</div>
        <div class="p-2 bd-highlight">Flex item</div>
        <div class="p-2 bd-highlight">Third flex item</div>
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
