<template>
  <div class="home h-100">
    <nav class="navbar navbar-light bg-light fixed-top">
      <div class="container-fluid">
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
          <select class="form-select" aria-label="Default select example">
            <option>English</option>
            <option>Español</option>
          </select>
        </form>
      </div>
    </nav>

    <div class="h-100 p-5 d-flex flex-column">
      <p class="mt-3 p-4 flex-fill text-center">
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

      <div class="input-group mb-3">
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
