// plugins/axios.js
import { defineNuxtPlugin } from "#app";
import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const api = axios.create({
    baseURL: "https://api.example.com", // Altere para a URL da sua API
  });

  // Adicione o axios ao contexto global do Nuxt
  nuxtApp.provide("axios", api);
});
