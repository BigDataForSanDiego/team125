<template>
  <div class="home h-100">
    <Navbar />

    <div class="h-100 p-5 d-flex flex-column">
      <div class="pt-4 d-flex">
        <div class="flex-fill">
          <h3 class="text-capitalize">
            {{ this.$route.query.search }}
          </h3>
        </div>

        <select class="form-select m-auto" style="max-width: 192px">
          <option>Lowest price</option>
          <option>Home delivery</option>
        </select>
      </div>

      <hr />

      <div class="flex-fill">
        <div v-if="_loading" class="m-3 text-center">
          <div class="spinner-border" style="width: 128px; height: 128px">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>

        <div v-else>
          <div v-if="result.length == 0" class="text-center">
            <i class="bi bi-emoji-frown" style="font-size: 128px"></i>
            <h1>Sorry, nothing found...</h1>
            <h2>try searching for another name or variant</h2>
          </div>

          <div v-else>
            <div v-for="vendor in result.vendors" class="card mb-3">
              <div class="d-flex mx-3">
                <div class="my-auto">
                  <img
                    :src="vendor.vendor_image"
                    class="img-fluid rounded-start"
                    alt=""
                    width="64"
                  />
                </div>

                <div class="flex-fill">
                  <div class="card-body">
                    <h5 class="card-title">
                      {{ vendor.vendor_name }}
                      <i v-if="vendor.vendor_delivery" class="bi bi-envelope-check"></i>
                    </h5>
                    <p class="card-text">
                      {{ vendor.description }}
                    </p>
                    <p class="card-text">
                      <small class="text-muted">
                        <span v-if="vendor.contact_info.location != ''">
                          <i class="bi bi-geo-alt"></i>
                          {{ vendor.contact_info.location }}
                        </span>
                      </small>
                    </p>
                  </div>
                </div>

                <div class="my-auto text-center">
                  <div class="pb-2">
                    <i class="bi bi-currency-dollar"></i>{{ vendor.price }}
                  </div>
                  <button type="button" class="btn btn-primary" @click="_onResultClick">
                    See more
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

export default {
  name: "ListingView",
  components: {
    Navbar,
  },
  data: function () {
    return {
      _loading: false,
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
    };
  },
  mounted: function () {
    setTimeout(() => {
      this._loading = false;
    }, 3000);
  },
  methods: {
    _onResultClick: function () {
      this.$router.push({
        path: "/product",
        query: {
          search_type: this.$route.query.search_type,
          vendor: "costco",
        },
      });
    },
  },
};
</script>

<style></style>
