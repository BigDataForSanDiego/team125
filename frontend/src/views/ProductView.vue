<template>
  <div class="home h-100">
    <Navbar />

    <div class="h-100 p-5 d-flex flex-column">
      <div v-if="result === null" class="text-center">
        <i class="bi bi-emoji-frown" style="font-size: 128px"></i>
        <h1>
          {{ _i18n("sorry") }}
        </h1>
        <h2>
          {{ _i18n("try") }}
        </h2>
      </div>
      <div v-else class="">
        <div class="h-25 my-5 m-auto p-2 d-flex border bg-white text-center info">
          <div class="p-2 bg-white flex-fill">
            <h5>{{ this.$route.query.search }}</h5>
            <p>
              <small class="text-muted">{{ result.description || result.name }}</small>
            </p>
          </div>
        </div>

        <div class="p-3 text-center">
          <img
            :src="selectedVendor.vendor_image"
            class="rounded mx-auto d-block rounded-circle"
            alt=""
            width="192"
            height="192"
          />
          <h1>{{ selectedVendor.vendor_name }}</h1>
          <h3><i class="bi bi-currency-dollar"></i>{{ selectedVendor.price }}</h3>

          <div v-if="selectedVendor.location != ''">
            <i class="bi bi-geo-alt"></i>
            {{ selectedVendor.location || "San Diego, CA" }}
          </div>
          <br />
          <div v-if="selectedVendor.telephone != ''">
            <i class="bi bi-telephone"></i>
            {{ selectedVendor.telephone }}
          </div>
          <br />
          <a
            v-if="selectedVendor.location != null"
            :href="'http://maps.google.com/?q=' + selectedVendor.vendor_name"
            type="button"
            class="btn btn-primary"
          >
            <i class="bi bi-geo"></i> {{ _i18n("find") }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

import Session from "@/core/session";

export default {
  name: "ProductView",
  components: {
    Navbar,
  },
  data: function () {
    return {
      result: null,

      _loading: true,

      _session: Session,
    };
  },
  computed: {
    selectedVendor: function () {
      if (this.result.vendors.length == 0) return {};
      for (const vendor of this.result.vendors) {
        if (vendor.vendor_name == this.$route.query.vendor) return vendor;
      }
      return this.result.vendors[0];
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
    _i18n: function (i18n_id) {
      const internationalization = {
        english: {
          find: "FIND NEAR ME",
          sorry: "Sorry, nothing found...",
          try: "try searching for another name or variant",
        },
        spanish: {
          find: "ENCUENTRA CERCA DE MÍ",
          sorry: "Lo siento, no se encontró nada...",
          try: "intente buscar otro nombre o variante",
        },
      };
      return internationalization[this._session.language][i18n_id];
    },
  },
};
</script>

<style>
@media (min-width: 576px) {
  .info {
    width: 50%;
  }
}

@media (min-width: 992px) {
  .info {
    width: 25%;
  }
}
</style>
