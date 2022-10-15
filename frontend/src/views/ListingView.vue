<template>
  <div class="home h-100">
    <Navbar />

    <div class="h-100 p-5 d-flex flex-column">
      <div class="pt-4 d-flex">
        <div class="flex-fill mt-4">
          <h3 class="text-capitalize">
            {{ this.$route.query.search }}
          </h3>
        </div>

        <div class="m-auto">
          {{ _i18n("sort") }}:
          <select
            class="form-select"
            style="max-width: 192px"
            @change="_onSortChange($event.target.value)"
          >
            <option value="price">
              {{ _i18n("lowest") }}
            </option>
            <option value="shipping">
              {{ _i18n("home") }}
            </option>
          </select>
        </div>
      </div>

      <hr />

      <div class="flex-fill">
        <div v-if="_loading" class="m-3 text-center">
          <div class="spinner-border" style="width: 128px; height: 128px">
            <span class="visually-hidden">{{ _i18n("loading") }}</span>
          </div>
        </div>

        <div v-else>
          <div v-if="result === null" class="text-center">
            <i class="bi bi-emoji-frown" style="font-size: 128px"></i>
            <h1>
              {{ _i18n("sorry") }}
            </h1>
            <h2>
              {{ _i18n("try") }}
            </h2>
          </div>

          <div v-else>
            <div v-for="vendor in sortedVendors" :key="vendor.vendor_name" class="card mb-3">
              <div class="d-flex mx-3">
                <div class="my-auto">
                  <img
                    v-if="vendor.vendor_image != ''"
                    :src="vendor.vendor_image"
                    class="img-fluid rounded-start"
                    alt=""
                    width="32"
                    height="32"
                    style="min-width: 32px"
                  />
                </div>

                <div class="flex-fill">
                  <div class="card-body">
                    <b class="vendor-name">
                      {{ vendor.vendor_name }}
                      <i v-if="vendor.shipping" class="bi bi-envelope-check"></i>
                    </b>
                    <p class="card-text">
                      {{ vendor.description }}
                    </p>
                    <p class="card-text">
                      <small class="text-muted">
                        <span v-if="vendor.location != ''">
                          <i class="bi bi-geo-alt"></i>
                          {{ vendor.location || "San Diego, CA" }}
                        </span>
                      </small>
                    </p>
                  </div>
                </div>

                <div class="my-auto text-center">
                  <div class="pb-2">
                    <i class="bi bi-currency-dollar"></i>{{ vendor.price }}
                  </div>
                  <button
                    type="button"
                    class="btn btn-primary"
                    style="min-width: 95px"
                    @click="_onResultClick(vendor.vendor_name)"
                  >
                    {{ _i18n("more") }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

import Session from "@/core/session";

export default {
  name: "ListingView",
  components: {
    Navbar,
  },
  data: function () {
    return {
      result: null,

      _loading: true,
      _sorting_by: "price",

      _session: Session,
    };
  },
  computed: {
    sortedVendors: function () {
      return this.result.vendors.sort((vendor_a, vendor_b) => {
        if (this._sorting_by == "price") return vendor_a.price - vendor_b.price;
        else if (this._sorting_by == "shipping") return vendor_b.shipping - vendor_a.shipping;
      });
    },
  },
  mounted: function () {
    if (this.$route.query.search in this._session.medicines) {
      const medicine = this.$route.query.search;

      this.result = this._session.medicines[medicine];
    }
    setTimeout(() => {
      this._loading = false;
    }, 1000);
  },
  methods: {
    _onSortChange: function (sort_by) {
      this._sorting_by = sort_by;
    },
    _onResultClick: function (vendor) {
      this.$router.push({
        path: "/product",
        query: {
          category: this.$route.query.category,
          search: this.$route.query.search,
          vendor: vendor,
        },
      });
    },

    _i18n: function (i18n_id) {
      const internationalization = {
        english: {
          sort: "Sort by",
          lowest: "Lowest price",
          home: "Home delivery",
          sorry: "Sorry, nothing found...",
          try: "try searching for another name or variant",
          more: "See more",
          loading: "Loading...",
        },
        spanish: {
          sort: "Ordenar por",
          lowest: "Precio bajo",
          home: "Entrega a domicilio",
          sorry: "Lo siento, no se encontró nada...",
          try: "intente buscar otro nombre o variante",
          more: "Ver más",
          loading: "Cargando...",
        },
      };
      return internationalization[this._session.language][i18n_id];
    },
  },
};
</script>

<style>
.vendor-name {
  display: block;
  width: 95px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (min-width: 576px) {
  .vendor-name {
    white-space: initial !important;
    overflow: initial !important;
    width: initial !important;
    text-overflow: initial !important;
  }
}
</style>
