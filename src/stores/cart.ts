export const useCartStore = defineStore('cart', () => {
  // 1. State (ref, reactive, etc) / getters (computed)
  const cart = ref([])
  const cartText = computed(() => {
    const displayText =
      cart.value.length === 0
        ? 'Cart is empty!'
        : `Total ${cart.value.length} items`
    return displayText
  })

  // 2. Actions (functions)
  const addToCart = (pizza) => {
    cart.value.push(pizza)
  }

  return {
    cart,
    addToCart,
    cartText,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore as any, import.meta.hot))
}
