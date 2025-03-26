<script setup>
defineEmits(['change_filter'])
</script>

<template>
  <div class="filter_search">
    <h2>Фильтрация</h2>
    <input
      type="text"
      placeholder="Введите..."
      value=""
      name="filter"
      @input="$emit('change_filter', $event.target.value)"
    />
  </div>
</template>

<style scoped>
.filter_search {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}
.filter_search input {
  width: 40%;
}
</style>
