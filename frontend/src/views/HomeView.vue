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
          <a class="nav-link active" aria-current="page" href="#">Medicine</a>
        </li>
        <li class="px-1 nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
      </ul>

      <div class="search-input input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="Search"
        />
        <button class="btn btn-outline-success" type="button" id="Search">Compare</button>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "HomeView",
  components: {
    Navbar,
  },
};
</script>

<style>
@media (min-width: 576px) {
  .description,
  .search-input {
    width: 50%;
    margin: auto;
  }
}

@media (min-width: 992px) {
  .search-input {
    width: 25%;
    margin: auto;
  }
}
</style>
