<script setup lang="ts">
  // const props = defineProps({
  // 	name: {
  // 		type: String,
  // 		default: 'FeatureSection',
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
  <section class="pb-12 pt-24">
    <div class="container mx-auto px-4 space-y-12">
      <div class="flex flex-wrap -mx-4 items-center">
        <div class="p-4 w-full lg:w-6/12">
          <h2 class="dark:text-primary-400 mb-2 text-2xl text-primary-500">
            Welcom to Pizzeria
          </h2>
          <h3 class="font-bold mb-2 text-4xl">
            Indulge Yourself With the Delicacy of Our Pizza
          </h3>
          <p class="mb-6">
            Phasellus pulvinar faucibus neque, nec rhoncus nunc ultrices sit
            amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus pulvinar faucibus neque, nec rhoncus nunc ultrices sit
            amet. Curabitur ac sagittis neque, vel egestas est.
          </p>
          <BaseButton label="Learn More" size="lg"></BaseButton>
        </div>
        <div class="p-4 w-full lg:w-6/12">
          <div class="-mx-4 flex items-center flex-wrap">
            <div class="p-3 space-y-6 w-10/12 sm:w-6/12">
              <img
                src="https://images.unsplash.com/photo-1504718855392-c0f33b372e72?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDQ0fHxyZXN0YXVyYW50fGVufDB8fHx8MTYzMTA4MTM3NQ&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=500&h=400&fit=crop"
                width="500"
                class="rounded-lg w-full"
                alt="..."
                height="400"
              />
              <img
                src="https://images.unsplash.com/photo-1558138838-76294be30005?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDg0fHxwaXp6YXxlbnwwfHx8fDE2MzEwODA5NDA&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=500&h=400&fit=crop"
                width="500"
                class="rounded-lg w-full"
                height="400"
                alt="..."
              />
            </div>
            <div class="p-3 w-10/12 sm:w-6/12">
              <img
                src="https://images.unsplash.com/photo-1593504049359-74330189a345?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDQ2fHxwaXp6YXxlbnwwfHx8fDE2MzEwODA4NzU&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=500&h=650&fit=crop"
                width="500"
                class="rounded-lg w-full"
                height="650"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-50 mx-auto p-6 rounded-lg xl:w-10/12">
        <div class="-mx-4 flex flex-wrap justify-center">
          <div class="p-4 w-full sm:w-6/12 lg:w-4/12">
            <div class="flex flex-wrap md:space-x-4">
              <div class="py-1 w-full md:w-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                  class="h-16 text-primary-500 w-16"
                  fill="currentColor"
                >
                  <path
                    d="M116.646 56.252H11.351l.097-2.088C12.735 26.307 35.819 4.485 64 4.485c28.18 0 51.264 21.821 52.551 49.678l.095 2.089zM15.578 52.26h96.842C110.209 27.544 89.334 8.478 64 8.478c-25.335 0-46.21 19.066-48.422 43.782z"
                  ></path>
                  <path
                    d="M99.604 48.64c-2.107-9.755-7.57-18.675-15.389-25.116l2.541-3.081c8.504 7.01 14.455 16.724 16.75 27.354l-3.902.843zM117.174 66.565H10.821c-2.451 0-4.163-2.883-4.163-7.01 0-4.139 1.712-7.029 4.163-7.029h106.353c2.455 0 4.168 2.89 4.168 7.029 0 4.128-1.713 7.01-4.168 7.01zM11.25 62.573h105.492c.236-.416.607-1.449.607-3.017 0-1.586-.369-2.623-.604-3.037h-105.5c-.232.413-.596 1.449-.596 3.037.001 1.57.367 2.602.601 3.017z"
                  ></path>
                  <path
                    d="M35.502 113.492c-.292-.399-7.081-9.89-2.079-21.773 2.37-5.628.836-19.486-.09-23.938l-.676-.526-.005-.984c0-.526 0-1.922 1.321-2.467l1.236-.509.686.67c1.95-.397 5.143-.718 7.808 1.1 2.079 1.417 3.345 3.796 3.764 7.072 1.277 9.956 3.871 13.198 5.823 14.163 1.682.832 3.931.45 6.684-1.141l1.997 3.456c-3.982 2.301-7.499 2.726-10.453 1.264-4.167-2.064-6.788-7.7-8.011-17.235-.268-2.096-.959-3.534-2.053-4.28-1.189-.812-2.818-.786-4.104-.599 1.304 6.407 2.223 19.635-.248 25.504-4.135 9.821 1.563 17.785 1.621 17.864l-3.221 2.359zM58.107 127.758h-3.993v-8.283l46.43-51.514c-1.732-.606-4.613-.723-8.172 2.526-7.879 7.197-20.441 19.926-20.566 20.054l-2.842-2.803c.127-.129 12.762-12.931 20.717-20.198 6.768-6.184 12.99-3.694 15.336-1.513l1.439 1.337-48.35 53.645v6.749z"
                  ></path>
                  <path
                    d="m33.728 128-3.704-1.491 6.061-15.05c.334-.957 3.969-10.812 14.163-17.539 9.797-6.467 12.292-13.561 13.371-19.019 1.577-7.985 3.221-10.281 11.784-11.226l2.814-.311-7.74 32.64-3.885-.922 6.414-27.043c-3.959.749-4.393 2.176-5.471 7.636-1.229 6.221-4.056 14.296-15.088 21.576-9.309 6.146-12.568 15.453-12.601 15.545l-.039.105L33.728 128zM62.004 0h3.992v6.481h-3.992z"
                  ></path>
                </svg>
              </div>
              <div class="py-1 w-full md:flex-1 md:w-full">
                <h4 class="font-medium mb-2 text-gray-900 text-xl">
                  Best Service
                </h4>
                <h3 class="dark:text-gray-800">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h3>
              </div>
            </div>
          </div>
          <div class="p-4 w-full sm:w-6/12 lg:w-4/12">
            <div class="flex flex-wrap md:space-x-4">
              <div class="py-1 w-full md:w-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  class="h-16 text-primary-500 w-16"
                  fill="currentColor"
                >
                  <g
                    data-name="Group 1055"
                    transform="translate(-17870.99 -9283.5)"
                  >
                    <path
                      data-name="Path 7087"
                      d="M17916 9307v20m0-19h-40m40 18h-40m40-9h-40m0-10v20m26.26-19c1.58-3.71 3.13-7.09 3.91-8.88a2.24 2.24 0 012-1.4 8.64 8.64 0 013.63.88 8.54 8.54 0 012.86 2.4 2.24 2.24 0 01.06 2.46c-.61 1-1.53 2.63-2.62 4.51m1.18-12.22l-1.36 2.68m4.03-1.31l-1.82 3.56m-3.52-6.29l-1.82 3.56m3.48 7.39h0m-8.01-.72l.89.45m-25.85 2.93c-3.44-7.33-4.38-13.93-2-15.13 2.46-1.29 7.79 4.13 11.85 12.05m-.53 3.08c.52-2 1.29-4 2.41-5 0 0 .67 2.34 1.52 5"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>
                    <circle
                      data-name="Ellipse 292"
                      cx=".85"
                      cy=".85"
                      r=".85"
                      transform="rotate(-27.11 28226.34 -32434.387)"
                    ></circle>
                    <circle
                      data-name="Ellipse 293"
                      cx=".85"
                      cy=".85"
                      r=".85"
                      transform="rotate(-27.11 28234.228 -32432.566)"
                    ></circle>
                    <circle
                      data-name="Ellipse 294"
                      cx=".85"
                      cy=".85"
                      r=".85"
                      transform="rotate(-27.11 28239.058 -32428.123)"
                    ></circle>
                    <circle
                      data-name="Ellipse 295"
                      cx=".85"
                      cy=".85"
                      r=".85"
                      transform="rotate(-27.11 28236.924 -32436.93)"
                    ></circle>
                    <circle
                      data-name="Ellipse 296"
                      cx=".85"
                      cy=".85"
                      r=".85"
                      transform="rotate(-27.11 28222.312 -32427.83)"
                    ></circle>
                    <circle
                      data-name="Ellipse 297"
                      cx=".85"
                      cy=".85"
                      r=".85"
                      transform="rotate(-27.11 28216.61 -32428.31)"
                    ></circle>
                    <circle
                      data-name="Ellipse 298"
                      cx=".85"
                      cy=".85"
                      r=".85"
                      transform="rotate(-27.11 28229.81 -32427.759)"
                    ></circle>
                    <path
                      data-name="Path 7088"
                      d="M17904.92 9301.94h0a10.65 10.65 0 00-8.92-4.33 10.79 10.79 0 00-8.7 4"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>
                    <path
                      data-name="Path 7089"
                      d="M17896 9297.61s-1.27-7-.63-7.61m2.53 0l-1.27 6.98m-3.8-6.98s.91 7 2.36 7.61"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>
                  </g>
                </svg>
              </div>
              <div class="py-1 w-full md:flex-1 md:w-full">
                <h4 class="font-medium mb-2 text-gray-900 text-xl">
                  Healthy &amp; Organic
                </h4>
                <h3 class="dark:text-gray-800">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h3>
              </div>
            </div>
          </div>
          <div class="p-4 w-full sm:w-6/12 lg:w-4/12">
            <div class="flex flex-wrap md:space-x-4">
              <div class="py-1 w-full md:w-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  class="h-16 text-primary-500 w-16"
                  fill="currentColor"
                >
                  <path
                    d="m29.59 13.21-3.9-3.85A1.31 1.31 0 0 0 24.8 9H19V6.38A1.3 1.3 0 0 0 17.81 5H3.21A1.3 1.3 0 0 0 2 6.38v14.24A1.3 1.3 0 0 0 3.21 22H4a2.74 2.74 0 0 0 0 .5 3.5 3.5 0 0 0 7 0 2.74 2.74 0 0 0 0-.5h10a2.74 2.74 0 0 0 0 .5 3.5 3.5 0 0 0 7 0 2.74 2.74 0 0 0 0-.5h.74A1.35 1.35 0 0 0 30 20.61v-6.4a1.4 1.4 0 0 0-.41-1zM7.5 24A1.5 1.5 0 0 1 6 22.5a1.39 1.39 0 0 1 .09-.5 1.4 1.4 0 0 1 .69-.8 1.64 1.64 0 0 1 .33-.14A1.58 1.58 0 0 1 7.5 21a1.5 1.5 0 0 1 0 3zm2.44-4a3.48 3.48 0 0 0-4.88 0H4V7h13v13zM26 22.5a1.5 1.5 0 1 1-1.5-1.5 1.27 1.27 0 0 1 .39.06 1.46 1.46 0 0 1 1 .94 1.39 1.39 0 0 1 .11.5zm2-2.5h-1.06a3.48 3.48 0 0 0-4.87 0H19v-9h5.57L28 14.53z"
                  ></path>
                </svg>
              </div>
              <div class="py-1 w-full md:flex-1 md:w-full">
                <h4 class="font-medium mb-2 text-gray-900 text-xl">
                  24/7 Delivery
                </h4>
                <h3 class="dark:text-gray-800">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
