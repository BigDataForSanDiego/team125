<template>
  <div class="home h-100">
    <Navbar />

    <div class="h-100 p-5 d-flex flex-column">
      <div class="h-25 mt-5 p-3 d-flex border">
        <img :src="result.product_image" class="m-2 rounded-start" alt="" width="128" />

        <div class="p-2 card-body">
          <h5 class="card-title">{{ result.name }}</h5>
          <p class="card-text">
            <small class="text-muted">{{ result.description }}</small>
          </p>
        </div>
      </div>

      <div class="p-3 text-center">
        <img
          :src="selectedVendor.vendor_image"
          class="rounded mx-auto d-block rounded-circle"
          alt=""
          width="256"
        />
        <h1>{{ selectedVendor.vendor_name }}</h1>
        <h3><i class="bi bi-currency-dollar"></i>{{ selectedVendor.price }}</h3>

        <div v-if="selectedVendor.contact_info.location != ''">
          <i class="bi bi-geo-alt"></i>
          {{ selectedVendor.contact_info.location }}
        </div>
        <br />
        <div v-if="selectedVendor.contact_info.telephone != ''">
          <i class="bi bi-telephone"></i>
          {{ selectedVendor.contact_info.telephone }}
        </div>
        <br />
        <button type="button" class="btn btn-primary">
          {{ _i18n("find") }}
        </button>
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
      result: {
        name_id: "bupropion-xl",
        name: "Bupropion XL",
        description: "BUPROPION treats depression",
        product_image: "img/icons/favicon.svg",
        vendors: [
          {
            vendor_name_id: "costco",
            vendor_name: "Costco",
            contact_info: {
              location: "San Diego, CA",
              telephone: "+1 (619) 123-4567",
            },
            vendor_delivery: true,
            vendor_image: "img/icons/favicon.svg",
            price: 4.99,
          },
        ],
      },

      _loading: false,

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
    setTimeout(() => {
      this._loading = false;
    }, 3000);
  },
  methods: {
    _i18n: function (i18n_id) {
      const internationalization = {
        english: {
          find: "FIND NEAR ME",
        },
        spanish: {
          find: "ENCUENTRA CERCA DE MÍ",
        },
      };
      return internationalization[this._session.language][i18n_id];
    },
  },
};
</script>

<style></style>
