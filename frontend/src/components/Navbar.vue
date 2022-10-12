<template>
  <nav class="navbar navbar-light bg-light fixed-top">
    <div v-if="_searching" class="container-fluid">
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="Search"
        />
        <button class="btn btn-outline-success" type="button" id="Compare">
          Compare
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
        <select class="form-select" aria-label="Default select example">
          <option>English</option>
          <option>Español</option>
        </select>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    search: {
      default: true,
    },
  },
  data: () => {
    return {
      _searching: false,
    };
  },
  methods: {
    startSearch: function () {
      this._searching = true;
    },
    stopSearch: function () {
      this._searching = false;
    },
    enterSearch: function () {
      console.log("Searching...");
    },
  },
};
</script>
