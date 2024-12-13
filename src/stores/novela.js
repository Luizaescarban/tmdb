import { reactive, computed } from 'vue';
import { defineStore } from 'pinia';
import api from '@/plugins/axios';

export const useNovelaStore = defineStore('novela', () => {
  const state = reactive({
    currentNovela: {},
  });

  const currentNovela = computed(() => state.currentNovela);

  const getNovelaDetail = async (novelaId) => {
    const response = await api.get(`novela/${novelaId}`);
    state.currentNovela = response.data;
  };

  return { currentNovela, getNovelaDetail };
});
