<template>
  <input
    type="text"
    class="form-control"
    placeholder="Search"
    aria-label="Search"
    aria-describedby="Search"
  />
</template>

<script>
export default {
  name: "Search",
  props: {
    search: {
      default: false,
    },
  },
  data: () => {
    return {
      _searching: false,
    };
  },
  methods: {},
};
</script>
