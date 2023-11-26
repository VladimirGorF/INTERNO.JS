<template>
      <div class="examples__Item">
        <img :src="item.url" alt="examples__image" class="examples__image" />
        <h2 class="title">{{ item.title }}:{{ item.id }}</h2>
        <div class="dateBox">
          <p class="dateBoxText">{{ item.text }}</p>
          <a href="#">
            <svg
              class="dateBoxImage"
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="53"
              viewBox="0 0 52 53"
              fill="none"
            >
              <circle
                class="circle"
                cx="26"
                cy="26.2671"
                r="26"
                fill="#F4F0EC"
              />
              <path
                d="M23.7714 32.9529L29.7142 26.2672L23.7714 19.5815"
                stroke="#292F36"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
</template>

<script>
export default {
  name: 'ExampleItem',
  props: ['item'],
  data () {
    return {}
  },

  mounted () {},

  methods: {}
}
</script>

<style lang="scss" scoped></style>
