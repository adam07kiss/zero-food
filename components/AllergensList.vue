<script setup>
defineProps({
  allergens: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="font-roboto text-menu text-gray flex-wrap items-center gap-2 flex justify-center text-center py-2">
    {{ $t('allergens') }}
    <span v-for="allergenId in allergens.sort((a, b) => a - b)">{{ allergenId }} - {{ $t(`menu-allergen-${allergenId}`) }}</span>
  </div>
</template>
