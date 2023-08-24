const cart = ref([])

export const useCart = () => {
  const addToCart = (pizza) => {
    cart.value.push(pizza)
  }

  const cartText = computed(() => {
    const displayText =
      cart.value.length === 0
        ? 'Cart is empty!'
        : `Total ${cart.value.length} items`
    return displayText
  })

  return {
    cart,
    addToCart,
    cartText,
  }
}
