<template>
<div>
<div class="container">
  <Hero/>
  <LargeDisplay
      v-for="CardInfo in largeCardInfo"
      :key="CardInfo"
      :cardsSection="CardInfo"
  />
  <SmallDisplay
      v-for="cardInfo in smallCardSections"
      :key="cardInfo.id"
      :cardsSection="cardInfo"
  />
</div>
</div>

</template>

<script>
import { largeCardSections,smallCardSections } from "@/assets/data.js"
export default {
  data(){
    return{
      largeCardInfo: largeCardSections,
      smallCardSections: smallCardSections
    }
  }
}
</script>
