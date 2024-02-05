<template>
  <div>
    <div id="toggleMain" class="toggleBoxMain">
      <div class="toggleBox">
        <a
          class="toggle"
          v-for="(toggle, index) in toggleList"
          :key="index"
          :class="[index === activeToggleIndex ? 'toggleActive' : '']"
          @click="
            activeToggleIndex = index;
            filter(toggle);
            makeSound();
          "
        >
          {{ toggle }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyToggle',

  data () {
    return {
      activeToggleIndex: 0,
      toggleList: ['Bathroom', 'Bed Room', 'Kitchan', 'Living Area']
    }
  },

  mounted () {},

  methods: {
    filter (toggle) {
      // отсюда наш toggle улетит в тег MyToggle компонента MyProject, там мы его вызовем как событие @filterToggle="filterToggle"  и создадим для него там функцию с аргументом toggle.
      this.$emit('filterToggle', toggle)
    },
    makeSound () {
      const audio = new Audio(require('../../../assets/sounds/jeleznaya-knopka-vyiklyucheniya1.mp3')
      )
      audio.play()
    }
  }
}
</script>

<style lang="scss" scoped></style>
