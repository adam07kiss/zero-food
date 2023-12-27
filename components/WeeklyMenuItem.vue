<script setup>
import {computed} from "vue";
import {useDisplayPrice} from "@/composables/useDisplayPrice"; // Import the composable function

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
})

const priceAsText = computed(() => useDisplayPrice(props.item.price))

const allergensInBrackets = computed(() => {
  return props.item.allergens
      ? props.item.allergens.map(allergen => `(${allergen})`).join(" ")
      : ''
})

</script>
<template>
  <div>
    <div className="font-roboto font-bold text-menu flex flex-row justify-between gap-6">
      <div>
        {{ item.name[$i18n.locale] }}
        <span class="font-normal pr-2">{{ item.person[$i18n.locale] }}</span>
        <span class="font-normal">{{ allergensInBrackets }}</span>
      </div>
      <div class="flex items-start">{{ priceAsText }}</div>
    </div>
    <div class="font-roboto text-menu text-gray">
      {{ item.description[$i18n.locale] }}
    </div>
  </div>

</template>
