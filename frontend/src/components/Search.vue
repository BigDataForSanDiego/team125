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
    query_type: {
      default: "medicine",
    },
  },
  data: () => {
    return {
      _searching: false,
      query: "",
    };
  },
  methods: {
    _onSearchInput: function (query) {
      console.log(`Querying ${this.query_type} for '${query}'...`);
      this.query = query;
    },
  },
};
</script>
