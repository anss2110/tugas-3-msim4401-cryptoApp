<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title class="ion-text-center">💰 Crypto Tracker</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="outer-wrapper">
        <div class="content-wrapper">
          <ion-card class="ion-margin-bottom">
            <ion-card-content class="ion-text-center">
              <ion-button expand="block" shape="round" color="secondary" @click="getData">
                <ion-icon name="cloud-download-outline" slot="start"></ion-icon>
                Ambil Data
              </ion-button>
            </ion-card-content>
          </ion-card>

          <ion-card>
            <ion-card-header>
              <ion-card-title class="ion-text-center">Top Cryptocurrencies</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <ion-grid>
                <ion-row class="ion-padding-bottom" color="light">
                  <ion-col class="ion-text-bold">Name</ion-col>
                  <ion-col class="ion-text-bold">Symbol</ion-col>
                  <ion-col class="ion-text-bold ion-text-right">Harga USD</ion-col>
                </ion-row>
                <ion-row v-for="coin in coins" :key="coin.id" class="ion-align-items-center">
                  <ion-col>{{ coin.name }}</ion-col>
                  <ion-col>{{ coin.symbol }}</ion-col>
                  <ion-col class="ion-text-right">${{ Number(coin.price_usd).toFixed(2) }}</ion-col>
                </ion-row>
              </ion-grid>
            </ion-card-content>
          </ion-card>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonIcon } from '@ionic/vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';

const coins = ref([])

const getData = async () => {
  try {
    const response = await axios.get('https://api.coinlore.net/api/tickers/')
    coins.value = response.data.data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

onMounted(() => {
  getData()
})

</script>

<style scoped>
.ion-text-bold {
  font-weight: bold;
}

.outer-wrapper {
  display: flex;
  justify-content: center;
}

.content-wrapper {
  max-width: 640px;
  width: 100%;
  padding: 0 16px;
  padding-bottom: 24px;
}
</style>