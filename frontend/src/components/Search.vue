<template>
  <input
    type="text"
    class="form-control"
    placeholder="Search"
    aria-label="Search"
    aria-describedby="Search"
    @input="_onSearchInput($event.target.value)"
  />
</template>

<script>
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
    };
  },
  methods: {
    _onSearchInput: function (search) {
      console.log(`searching ${this.search_type} for '${search}'...`);
      this.search = search;
    },
  },
};
</script>
