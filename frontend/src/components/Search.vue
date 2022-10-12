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
    };
  },
  methods: {
    _onSearchInput: function (query_string) {
      console.log(`Querying ${this.query_type} for '${query_string}'...`);
    },
  },
};
</script>
