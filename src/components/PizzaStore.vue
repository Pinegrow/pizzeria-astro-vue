<script setup lang="ts">
  // import pizzas from '~~/db.json'

  defineProps({
    pizzas: {
      type: Array,
      default: () => [],
    },
  })

  // Using a composable for the cart
  // const { addToCart } = useCart()

  // Using a store for the cart
  const { addToCart } = useCartStore()
</script>
<template>
  <FloatingCartStoreActivator />
  <section class="pb-24 pt-12 text-center text-gray-50">
    <div class="container mx-auto px-4 relative">
      <div class="bg-gray-50 px-12 py-16 rounded-lg text-gray-400">
        <div class="-mx-4 flex flex-wrap items-center justify-center mb-12">
          <div class="px-4 text-center w-full md:w-10/12 xl:w-9/12">
            <h2 class="font-medium mb-1 text-primary-500">Our Menu</h2>
            <h3 class="capitalize font-bold text-4xl text-gray-900">
              Most Loved Items
            </h3>
          </div>
        </div>
        <div class="-mx-3 flex flex-wrap justify-center mb-12">
          <PizzaCard
            v-for="(pizza, index) in pizzas"
            :key="index"
            :description="pizza.description"
            :image="pizza.image"
            :name="pizza.name"
            :price="pizza.price"
            @add-to-cart="addToCart(pizza)"
          />
        </div>
        <div>
          <BaseButton label="Full Menu" size="lg"></BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
