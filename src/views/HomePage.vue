<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title class="ion-text-center">💰 Crypto Tracker</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding bg-white text-black dark:bg-gray-900 dark:text-white">
      <div class="outer-wrapper">
        <div class="content-wrapper">
          <ion-card class="ion-margin-bottom">
            <ion-card-content class="ion-text-center">
              <ion-button expand="block" shape="round" color="secondary" @click="getData">
                <ion-icon name="refresh" slot="start"></ion-icon>
                Ambil Data
              </ion-button>
            </ion-card-content>
          </ion-card>

          <ion-card>
            <ion-card-content>
              <ion-grid class="crypto-table">
                <ion-row v-for="coin in coins" :key="coin.id" class="coin-row">
                  <ion-col size="2">
                    <div class="rank">
                      <span class="label">Rank</span>
                      <span class="value">{{ coin.rank }}</span>
                    </div>
                  </ion-col>
                  <ion-col size="5">
                    <div class="coin-name">
                      <span class="label">{{ coin.name }}</span>
                      <span class="value">{{ coin.symbol }}</span>
                    </div>
                  </ion-col>
                  <ion-col size="4">
                    <div class="price">
                      <span class="label">USD</span>
                      <span class="value">{{ Number(coin.price_usd).toFixed(2) }}</span>
                    </div>
                  </ion-col>
                </ion-row>
              </ion-grid>
            </ion-card-content>
          </ion-card>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonIcon } from '@ionic/vue';
import axios from 'axios';
import { addIcons } from 'ionicons';
import { logoBitcoin, moon, refresh, sunny } from 'ionicons/icons';
import { onMounted, ref } from 'vue';

interface Coin {
  id: string;
  rank: string;
  name: string;
  symbol: string;
  price_usd: string;
}

const coins = ref<Coin[]>([])


const getData = async () => {
  try {
    const response = await axios.get('https://api.coinlore.net/api/tickers/')
    coins.value = response.data.data.sort((a: Coin, b: Coin) => {
      return parseFloat(a.rank) - parseFloat(b.rank)
    })
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

onMounted(() => {
  getData()
  addIcons({
    'logo-bitcoin': logoBitcoin,
    'refresh': refresh,
    'moon': moon,
    'sunny': sunny
  })
})
</script>