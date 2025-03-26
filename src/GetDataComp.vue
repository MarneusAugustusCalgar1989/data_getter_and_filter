<template>
  <FilterComp @change_filter="sendFilterData"></FilterComp>
  <!-- Прослушиваем изменения в дочернем инпуте и показываем компонент, если получили что-то с бэка. Можно проверить на валидность, а можно и не проверять -->
  <div v-if="postsList" class="getted_data">
    <DataTable
      :value="postsList"
      paginator
      :rows="25"
      :rowsPerPageOptions="[25, 50, 75, 100]"
      tableStyle="min-width: 50rem"
    >
      <Column field="id" sortable header="ID"></Column>
      <Column field="userId" sortable header="User Id"></Column>
      <Column field="title" sortable header="Title"></Column>
      <Column field="body" sortable header="Post"></Column>
    </DataTable>
  </div>
  <!-- Показываем, когда нечего показывать -->
  <div v-else class="no_getted_data">
    <h1 title="Кликни, чтобы попробовать еще раз" @click="fetchData(url)">
      Не удалось загрузить данные
    </h1>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import FilterComp from './components/FilterComp.vue'

const url = 'https://jsonplaceholder.typicode.com/posts'
// Это урл на эндпоинт, который должен у себя что-то искать
const fetchData = async (url) => {
  const response = await fetch(url)
  if (response.ok) {
    return response.json()
  } else {
    postsList.value = 0
  }
}

// Вызываем это, когда хотим получить фильтрованное

const sendFilterData = async (value) => {
  console.log(value)
  try {
    const response = await fetch(url + '?title_like=^' + value)
    response.json().then((data) => (postsList.value = data))
  } catch (e) {
    console.error(e)
    postsList.value = 0
  } finally {
    console.log('Ну, мы попытались')
  }
}

onMounted(() => {
  fetchData(url).then((data) => (postsList.value = data))
})
const postsList = ref()
</script>

<style scoped>
.no_getted_data {
  cursor: pointer;
}
</style>
