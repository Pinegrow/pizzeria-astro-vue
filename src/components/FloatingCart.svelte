<script lang="ts">
  import FloatingButton from './FloatingButton.svelte'
  import { useCartStore } from '../stores/cart'
  import { storeToRefs } from 'pinia'
  import { watch } from 'vue'

  // // Using a composable for the cart
  // const { cartText } = useCart()

  // Using a store for the cart
  const { cartText } = storeToRefs(useCartStore())

  let svelteCartText = cartText.value

  watch(cartText, (updatedCartText) => {
    svelteCartText = updatedCartText
  })
</script>

<FloatingButton>
  <span>{svelteCartText}</span>
</FloatingButton>
