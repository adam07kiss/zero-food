<script setup>
defineProps({
  category: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div class="text-gray pt-3 text-h3 font-comfortaa font-bold uppercase">
    <h3>{{ category.title[$i18n.locale] }}</h3>
  </div>
  <div class="flex flex-col py-3 pl-3 pr-3 gap-6">
    <WeeklyMenuItem v-for="item in category.items" :item="item"/>
  </div>
</template>
