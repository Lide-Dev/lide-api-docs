<template>
  <Card class="layout-server-1 p-col-12 p-md-6 p-shadow-6">
    <template #title> Status Server API Response </template>
    <template #content>
      Server yang mengontrol request API. URL yang digunakan adalah
      https://laron-server-side.sharedwithexpose.com/api.
      <p><b>Status :</b> {{ serverStatus }}</p>
    </template>
    <template #footer>
      <Button label="Refresh" :disabled="onRequest" @click="refresh" />
    </template>
  </Card>
  <blockquote class="quote-info">
    <p>
      <em
        >Ketika ingin mengecek status server dan response balasannya ditolak
        oleh CORS, itu wajar karena sisi klien merequest ke server layanan
        tunneling bukan server lokal, yang berarti server lokal tidak aktif.</em
      >
    </p>
  </blockquote>
</template>

<script>
import { inject, onMounted, ref } from "vue";
import axios from "axios";
export default {
  setup() {
    const serverStatus = ref("Tidak Aktif.");
    const onRequest = inject("refOnRequest");

    onMounted(() => {
      refresh();
    });

    async function refresh() {
      if (onRequest.value) return;
      onRequest.value = true;
      serverStatus.value = "Sedang Request API...";

      await axios
        .get("https://laron-server-side.sharedwithexpose.com/api/active")
        .then(() => {
          serverStatus.value = "Aktif.";
        })
        .catch((error) => {
          if (error.response) {
            switch (error.response.status) {
              case 429:
                serverStatus.value = "Terkena Limit namun Server Aktif.";
                break;

              default:
                serverStatus.value = "Tidak Aktif.";
                break;
            }
          } else {
            serverStatus.value = "Tidak Aktif.";
          }

          // 429
        });
      onRequest.value = false;
    }

    return { serverStatus, onRequest, refresh };
  },
};
</script>

<style>
</style>