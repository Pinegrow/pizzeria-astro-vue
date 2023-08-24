<script setup lang="ts">
  import { computed } from 'vue'
  import { useNav } from '../composables/nav'

  const { navlinks, currentLocation } = useNav()
  const desktopNavTabs = computed(() => {
    return navlinks.value.slice(0, 2)
  })
  const mobileNavTabs = computed(() => {
    return navlinks.value.slice(2, navlinks.value.length)
  })
</script>
<template>
  <div class="w-full">
    <nav class>
      <div class="container mx-auto px-4 sm:px-6">
        <div class="flex h-24 items-center justify-between">
          <div class="flex items-center justify-between w-full">
            <div class="flex flex-shrink-0 items-center">
              <a
                href="/"
                class="bg-primary-500 flex-col font-bold font-serif hover:text-opacity-75 inline-flex items-center leading-none mr-4 p-6 space-y-2 text-white text-xl"
                ><svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="2.5em"
                  xml:space="preserve"
                  stroke="currentColor"
                  viewBox="0 0 64 64"
                  height="2.5em"
                >
                  <path
                    d="M45.432 45.432A18.937 18.937 0 0132 51c-10.486 0-19-8.514-19-19s8.514-19 19-19 19 8.514 19 19H32l13.432 13.432zM32 8v48m16.971-40.971L15.029 48.971M51 32H8m37 13L15.029 15.029M19 27l-1 1m27-2v1m-9 17v-2m1-23h-1"
                    fill="none"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M52.126 32.846a2.99 2.99 0 01-1.188-2.21C50.251 20.785 42.027 13 32 13c-10.486 0-19 8.514-19 19s8.514 19 19 19c4.932 0 9.427-1.883 12.806-4.969a2.396 2.396 0 011.496-.639c.119-.015.247-.023.381-.03a2.409 2.409 0 012.434 3.131v.001a2.013 2.013 0 01-.519.84C44.283 53.461 38.436 56 32 56 18.754 56 8 45.246 8 32S18.754 8 32 8c12.783 0 23.245 10.015 23.961 22.619a2.745 2.745 0 01-.959 2.22l.007.008a2.21 2.21 0 01-2.766.087l-.117-.088z"
                    fill="none"
                    stroke-width="2"
                  ></path></svg
                ><span>The Pizzeria</span>
              </a>
            </div>
            <NavBarDesktopMenu
              :navlinks="desktopNavTabs"
              class="hidden sm:flex sm:ml-6"
            />
          </div>
          <DarkModeSwitch />
          <div class="-mr-2 items-center relative">
            <NavBarMobileMenuButton
              v-if="mobileNavTabs.length"
              class="hidden sm:block"
            />
            <NavBarMobileMenuButton v-if="navlinks.length" class="sm:hidden" />
            <NavBarMobileMenu
              class="hidden sm:flex sm:justify-end absolute right-0 mt-4"
              :navlinks="mobileNavTabs"
            />
          </div>
        </div>
      </div>
      <NavBarMobileMenu class="sm:hidden" :navlinks="navlinks" />
    </nav>
    <!-- <span class="flex justify-end container mx-auto pr-36 text-red-600">
      Current Pathname: {{ currentLocation.pathname }}</span
    > -->
  </div>
</template>
<style scoped></style>
