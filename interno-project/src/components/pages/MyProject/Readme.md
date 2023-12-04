Эту страница сделана без VUEX на основе передачи данных межуд компонентами через [props] и 
  methods: {
    filter (toggle) {
      // отсюда наш toggle улетит в тег MyToggle компонента MyProject, там мы его вызовем как событие @filterToggle="filterToggle"  и создадим для него там функцию с аргументом toggle.
      this.$emit('filterToggle', toggle)
    }
  }