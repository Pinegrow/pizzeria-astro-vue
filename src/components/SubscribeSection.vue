<script setup lang="ts">
  // const props = defineProps({
  // 	name: {
  // 		type: String,
  // 		default: 'SubscribeSection',
  // 	},
  // })

  // const emit = defineEmits(['addToCart'])

  // // Use the addToCart function like this:
  // // Eg-1: addToCart('pizza', 10)
  // // Eg-2: (event) => addToCart('pizza', 10, event)
  // const addToCart = (item, quantity /*, event*/) => {
  // 	emit('addToCart', { item, quantity })
  // }
</script>
<template>
  <section class="bg-primary-500 py-12 text-gray-300">
    <div class="container mx-auto px-4 relative">
      <div class="-mx-4 flex flex-wrap items-center">
        <div class="p-4 w-full lg:w-7/12">
          <h2 class="capitalize font-bold mb-2 text-3xl text-white">
            Subscribe To Our Newsletter
          </h2>
          <p>Get exclusive weekly offer and discounts.</p>
        </div>
        <div class="mx-auto p-4 w-full lg:w-5/12">
          <form>
            <div class="-mx-2 flex flex-wrap items-center">
              <div class="p-1 w-full sm:flex-1">
                <input
                  class="appearance-none border px-4 py-2 rounded text-gray-600 w-full"
                  type="email"
                  required
                  placeholder="Enter your email address..."
                />
              </div>
              <div class="p-1 text-right w-full sm:flex-initial sm:w-auto">
                <BaseButton
                  label="Subscribe"
                  color="secondary"
                  size="md"
                ></BaseButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
