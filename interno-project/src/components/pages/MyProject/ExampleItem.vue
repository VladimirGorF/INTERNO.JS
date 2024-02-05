<template>
  <div class="examples__Item">
    <!-- звездочка лайка берет класс из функции starChecker() при создании страницы, а потом берет из classStar, который управляется функцией selectStar() по клику  -->
    <svg
      :class="[mountedFlag === false ? starChecker() : classStar]"
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="35"
      viewBox="0 0 36 35"
      fill="none"
      @click="selectStar()"
    >
      <g filter="url(#filter0_d_2_14)">
        <path
          d="M16.0992 1.80951C16.7004 -0.0279021 19.2996 -0.0279021 19.9008 1.80951L21.7983 7.60879C22.0673 8.43084 22.8342 8.98685 23.6992 8.98685H29.8097C31.7506 8.98685 32.5539 11.4732 30.98 12.6088L26.0604 16.1581C25.3546 16.6674 25.0591 17.5748 25.3298 18.402L27.2146 24.1623C27.8166 26.0025 25.7137 27.539 24.1435 26.4062L19.1702 22.818C18.4715 22.3139 17.5285 22.3139 16.8298 22.818L11.8565 26.4062C10.2863 27.539 8.18335 26.0025 8.78545 24.1623L10.6702 18.402C10.9409 17.5748 10.6454 16.6674 9.93955 16.1581L5.02004 12.6088C3.44611 11.4732 4.24942 8.98685 6.19025 8.98685H12.3008C13.1658 8.98685 13.9327 8.43084 14.2017 7.60879L16.0992 1.80951Z"
          fill="#FFA928"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2_14"
          x="0.186523"
          y="0.431396"
          width="35.627"
          height="34.3618"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2_14"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2_14"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
    <!-- контент Item -->
    <img :src="item.url" alt="examples__image" class="examples__image" />
    <router-link to="/projectDetails"
      ><h2 class="title" @click="makeSoundKorotkiy()">
        {{ item.title }}:{{ item.id }}
      </h2></router-link
    >
    <div class="dateBox">
      <p class="dateBoxText">{{ item.text }}</p>

      <router-link to="/projectDetails">
        <svg
          class="dateBoxImage"
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="53"
          viewBox="0 0 52 53"
          fill="none"
          @click="makeSoundKorotkiy()"
        >
          <circle class="circle" cx="26" cy="26.2671" r="26" fill="#F4F0EC" />
          <path
            d="M23.7714 32.9529L29.7142 26.2672L23.7714 19.5815"
            stroke="#292F36"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExampleItem',
  props: ['item'],
  data () {
    return {
      classStar: 'star',
      mountedFlag: false
    }
  },
  mounted () {
    this.mountedFlag = true
  },
  methods: {
    makeSound () {
      const audio = new Audio(
        require('../../../assets/sounds/vozdushnyiy-effekt-priglushennyiy-myagkiy.mp3')
      )
      audio.play()
    },
    makeSoundKorotkiy () {
      const audio = new Audio(
        require('../../../assets/sounds/knopka-klik-korotkii-odinochnyii-shumnyii.mp3')
      )
      audio.play()
    },
    selectStar () {
      // переключалка классов
      if (this.classStar === 'star') {
        this.makeSound()
        this.classStar = 'selected star'
        // запись в хранилище лайков
        if (!localStorage.getItem('starKey')) {
          const dataToSave = this.item.id
          localStorage.setItem('starKey', dataToSave)
        } else {
          // получаем данные, добавляем новый id и пушим назад в хранилище
          const data = localStorage.getItem('starKey').split(',')
          data.push(this.item.id)
          const unique = new Set(data)
          const newData = Array.from(unique)
          const dataToSave = newData.join()
          localStorage.setItem('starKey', dataToSave)
        }
      } else {
        this.classStar = 'star'
        // получаем данные, удаляем id и пушим все назад в хранилище
        const data = localStorage.getItem('starKey').split(',')
        const index = data.indexOf(this.item.id.toString())
        data.splice(index, 1)
        const dataToSave = data.join()
        localStorage.setItem('starKey', dataToSave)
      }
    },
    starChecker () {
      // если данные есть в хранилище
      if (localStorage.getItem('starKey')) {
        const data = localStorage.getItem('starKey').split(',')
        if (data.includes(this.item.id.toString())) {
          this.classStar = 'selected star'
          return 'selected star'
        } else {
          this.classStar = 'star'
          return 'star'
        }
      } else {
        // если данных нет в хранилище
        this.classStar = 'star'
        return 'star'
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
