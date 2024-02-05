<template>
  <div class="box">
    <div class="box__lineMainBox">
      <div class="lineBox">
        <div :class="classLineBox"></div>
        <div :class="classLineBox"></div>
        <div :class="classLineBox"></div>
      </div>
    </div>
    <div class="box__projectPage">
      <div class="ProjectPageBanner">
        <div class="titleBox">
          <div class="title">Our Project</div>
          <div class="text">Home / Project</div>
        </div>
      </div>
      <!-- это под VUE раздел -->
      <MyToggle @filterToggle="filterToggle" />

      <div class="ProjectContent">
        <div class="blogPageContent">
          <div :class="classExamples">
            <!-- это под VUE раздел -->
            <ExampleItem
              v-for="item in sliceProducts()"
              :key="item.id"
              :item="item"
            />
            <!-- Нужно забиндить :item = "item" чтобы его увидел дочерний компонент тогда он попадет в его Props -->
          </div>

          <div class="pagination">
            <div class="pagBox">
              <a href="#toggleMain"
                class="page"
                @click="
                  backPage();
                  makeSoundKorotkiy();
                  getProducts(activePageId, 8);
                  sliceProducts();
                  pagesCounter();
                  getСlassLine();
                "
                >&lt;</a
              >
              <a href="#toggleMain"
                class="page"
                v-for="page in slicePages"
                :key="page.id"
                :class="{ active: page.id === activePageId }"
                @click="
                  activePageId = page.id;
                  makeSoundKorotkiy();
                  getProducts(page.id, 8);
                  movePage(page.id);
                  sliceProducts();
                  pagesCounter();
                  getСlassLine();
                "
                >0{{ page.id }}</a
              >
              <a href="#toggleMain"
                class="page"
                @click="
                  pagesCounter();
                  forwardPage();
                  makeSoundKorotkiy();
                  getProducts(activePageId, 8);
                  sliceProducts();
                  getСlassLine();
                "
                >&gt;</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>

<script>
import ExampleItem from "./ExampleItem.vue";
import MyToggle from "./MyToggle.vue";
import { mapMutations } from "vuex";
export default {
  name: "MyProject",
  components: {
    ExampleItem,
    MyToggle,
  },
  created () {
    this.SET_Visibility(true) //  передаем true во флаг страницы NotFound
  },
  data() {
    return {
      classLineBox: "box project", // будем менять этот класс в зависимости от длины productsFilteredArray
      classExamples: "examples",
      activeToggleName: "",
      pageStart: 1, // начало отображения страниц
      pageEnd: 4,
      pagesQuantity: 1,
      activePageId: 1, // активная подсвечиваемая страница по умолчанию
      pages: [],
      productStart: 0,
      productEnd: 8,
      productsQuantity: 0,
      productsFilteredArray: [],
      products: [
        {
          id: 0,
          url: "projectPageImages/1.svg",
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Bathroom",
          star: 'false'
        },
        {
          id: 1,
          url: "projectPageImages/2.svg",
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Bathroom",
          star: 'false'
        },
        {
          id: 2,
          url: "projectPageImages/4.svg",
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Bathroom",
          star: 'false'
        },
        {
          id: 3,
          url: "projectPageImages/5.svg",
          title: "Classic Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Bathroom",
          star: 'false'
        },
        {
          id: 4,
          url: "projectPageImages/6.svg",
          title: "Modern Kitchan.",
          text: "Decor / Artchitecture",
          type: "Kitchan",
          star: 'false'
        },
        {
          id: 5,
          url: "projectPageImages/5.svg",
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Bathroom",
          star: 'false'
        },
        {
          id: 6,
          url: "projectPageImages/8.svg",
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Bathroom",
          star: 'false'
        },
        {
          id: 7,
          url: "projectPageImages/1.svg",
          title: "Classic Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Bathroom",
          star: 'false'
        },
        {
          id: 8,
          url: "projectPageImages/1.svg",
          title: "Modern Bathroom.",
          text: "Decor / Artchitecture",
          type: "Bathroom",
          star: 'false'
        },
        {
          id: 9,
          url: "projectPageImages/2.svg",
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Bathroom",
          star: 'false'
        },
        {
          id: 10,
          url: "projectPageImages/5.svg",
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Bathroom",
          star: 'false'
        },
        {
          id: 11,
          url: "projectPageImages/4.svg",
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Bathroom",
          star: 'false'
        },
        {
          id: 12,
          url: "projectPageImages/5.svg",
          title: "Classic Minimal Bed Room.",
          text: "Decor / Artchitecture",
          type: "Bed Room",
          star: 'false'
        },
        {
          id: 13,
          url: "projectPageImages/6.svg",
          title: "Modern Bed Room.",
          text: "Decor / Artchitecture",
          type: "Bed Room",
          star: 'false'
        },
        {
          id: 14,
          url: "projectPageImages/7.svg",
          title: "Minimal Kitchan.",
          text: "Decor / Artchitecture",
          type: "Kitchan",
          star: 'false'
        },
        {
          id: 15,
          url: "projectPageImages/8.svg",
          title: "Minimal Kitchan.",
          text: "Decor / Artchitecture",
          type: "Kitchan",
          star: 'false'
        },
        {
          id: 16,
          url: "projectPageImages/1.svg",
          title: "Classic Minimal Living Area.",
          text: "Decor / Artchitecture",
          type: "Living Area",
          star: 'false'
        },
        {
          id: 17,
          url: "projectPageImages/1.svg",
          title: "Modern Living Area.",
          text: "Decor / Artchitecture",
          type: "Living Area",
          star: 'false'
        },
        {
          id: 18,
          url: "projectPageImages/2.svg",
          title: "Modern Living Area.",
          text: "Decor / Artchitecture",
          type: "Living Area",
          star: 'false'
        },
        {
          id: 19,
          url: "projectPageImages/3.svg",
          title: "Modern Living Area.",
          text: "Decor / Artchitecture",
          type: "Living Area",
          star: 'false'
        },
        {
          id: 20,
          url: "projectPageImages/4.svg",
          title: "Modern Living Area.",
          text: "Decor / Artchitecture",
          type: "Living Area",
          star: 'false'
        },
        {
          id: 21,
          url: "projectPageImages/5.svg",
          title: "Modern Living Area.",
          text: "Decor / Artchitecture",
          type: "Living Area",
          star: 'false'
        },
        {
          id: 22,
          url: "projectPageImages/6.svg",
          title: "Modern Living Area.",
          text: "Decor / Artchitecture",
          type: "Living Area",
          star: 'false'
        },
        {
          id: 23,
          url: "projectPageImages/7.svg",
          title: "Modern Living Area.",
          text: "Decor / Artchitecture",
          type: "Living Area",
          star: 'false'
        },
        {
          id: 24,
          url: "projectPageImages/8.svg",
          title: "Modern Living Area.",
          text: "Decor / Artchitecture",
          type: "Living Area",
          star: 'false'
        },
        ,
        {
          id: 25,
          url: "projectPageImages/1.svg",
          title: "Modern Bedroom.",
          text: "Decor / Artchitecture",
          type: "Bed Room",
          star: 'false'
        },
        {
          id: 26,
          url: "projectPageImages/2.svg",
          title: "Modern Bedroom.",
          text: "Decor / Artchitecture",
          type: "Bed Room",
          star: 'false'
        },
        {
          id: 27,
          url: "projectPageImages/3.svg",
          title: "Modern Bedroom.",
          text: "Decor / Artchitecture",
          type: "Bed Room",
          star: 'false'
        },
        {
          id: 28,
          url: "projectPageImages/4.svg",
          title: "Modern Bedroom.",
          text: "Decor / Artchitecture",
          type: "Bed Room",
          star: 'false'
        },
        {
          id: 29,
          url: "projectPageImages/5.svg",
          title: "Modern Bedroom.",
          text: "Decor / Artchitecture",
          type: "Bed Room",
          star: 'false'
        },
        {
          id: 30,
          url: "projectPageImages/6.svg",
          title: "Modern Bedroom.",
          text: "Decor / Artchitecture",
          type: "Bed Room",
          star: 'false'
        },
        {
          id: 31,
          url: "projectPageImages/7.svg",
          title: "Modern Bedroom.",
          text: "Decor / Artchitecture",
          type: "Bed Room",
          star: 'false'
        },
        {
          id: 32,
          url: "projectPageImages/8.svg",
          title: "Modern Bedroom.",
          text: "Decor / Artchitecture",
          type: "Bed Room",
          star: 'false'
        },
        {
          id: 33,
          url: "projectPageImages/1.svg",
          title: "Modern Bedroom.",
          text: "Decor / Artchitecture",
          type: "Kitchan",
          star: 'false'
        },
        {
          id: 34,
          url: "projectPageImages/8.svg",
          title: "Modern Kitchan.",
          text: "Decor / Artchitecture",
          type: "Kitchan",
          star: 'false'
        },
        ,
        {
          id: 35,
          url: "projectPageImages/1.svg",
          title: "Modern Kitchan.",
          text: "Decor / Artchitecture",
          type: "Kitchan",
          star: 'false'
        },
        {
          id: 36,
          url: "projectPageImages/2.svg",
          title: "Modern Kitchan.",
          text: "Decor / Artchitecture",
          type: "Kitchan",
          star: 'false'
        },
        {
          id: 37,
          url: "projectPageImages/3.svg",
          title: "Modern Kitchan.",
          text: "Decor / Artchitecture",
          type: "Kitchan",
          star: 'false'
        },
        {
          id: 38,
          url: "projectPageImages/4.svg",
          title: "Modern Kitchan.",
          text: "Decor / Artchitecture",
          type: "Kitchan",
          star: 'false'
        },
        {
          id: 39,
          url: "projectPageImages/3.svg",
          title: "Modern Kitchan.",
          text: "Decor / Artchitecture",
          type: "Kitchan",
          star: 'false'
        },
        {
          id: 40,
          url: "projectPageImages/4.svg",
          title: "Modern Kitchan.",
          text: "Decor / Artchitecture",
          type: "Kitchan",
          star: 'false'
        },
        {
          id: 41,
          url: "projectPageImages/5.svg",
          title: "Modern Kitchan.",
          text: "Decor / Artchitecture",
          type: "Kitchan",
          star: 'false'
        },
        {
          id: 42,
          url: "projectPageImages/6.svg",
          title: "Modern Bathroom.",
          text: "Decor / Artchitecture",
          type: "Bathroom",
          star: 'false'
        },
        {
          id: 43,
          url: "projectPageImages/6.svg",
          title: "Modern Kitchan.",
          text: "Decor / Artchitecture",
          type: "Kitchan",
          star: 'false'
        },
      ],
    };
  },

  methods: {
    ...mapMutations(['SET_Visibility']),
    makeSound() {
      const audio = new Audio(
        require("../../../assets/sounds/jeleznaya-knopka-vyiklyucheniya1.mp3")
      );
      audio.play();
    },
    makeSoundKorotkiy () {
      const audio = new Audio(
        require('../../../assets/sounds/knopka-klik-korotkii-odinochnyii-shumnyii.mp3')
      )
      audio.play()
    },
    filterToggle(toggle) {
      this.activeToggleName = toggle;
      this.activePageId = 1
      this.pageEnd = 2; // а дальше функциями ниже он изменится
      this.getProducts(1, 8);
      this.sliceProducts(); // обновляем фильтрацию
      this.pagesCounter(); // вызываем счетчик страниц при включении Тоггла
      this.getСlassLine(); // управление вертикальными линиями и размером сетки контента
    },
    movePage(page) {
      if (
        this.pageEnd > this.pagesQuantity + 1 ||
        page === this.pagesQuantity
      ) {
        return;
      } else if (page + 1 === this.pageEnd) {
        this.pageStart += 1;
        this.pageEnd += 1;
        return;
      } else if (page === this.pageStart && this.pageStart !== 1) {
        this.pageStart -= 1;
        this.pageEnd -= 1;
        return;
      }
    },
    forwardPage() {
      if (this.activePageId === this.pagesQuantity) {
        return;
      } else if (this.pageEnd === this.pagesQuantity + 1) {
        this.activePageId += 1;
        return;
      } else if (this.activePageId === 1) {
        this.activePageId += 1;
        return;
      }
      this.pageStart += 1;
      this.pageEnd += 1;
      this.activePageId += 1;
      this.slicePages;
    },
    backPage() {
      if (this.activePageId === 1) {
        return;
      } else if (this.pageStart - 1 <= 1) {
        this.pageStart = 1;
        this.pageEnd = 4;
        this.activePageId -= 1;
        return;
      } else if (this.activePageId === this.pagesQuantity) {
        this.activePageId -= 1;
        return;
      }
      this.activePageId -= 1;
      this.pageStart -= 1;
      this.pageEnd -= 1;
    },
    getProducts(page, step) {
      if (page === 1) {
        this.productEnd = 8;
        this.productStart = 0;
      } else {
        this.productEnd = step * page; // был + 1
        this.productStart = this.productEnd - 8;
      }
    },
    sliceProducts() {
      //фильтруем весь массив по activeToggleName
      const productsFiltered = this.products.filter((product) => {
        if (product.type === this.activeToggleName || !this.activeToggleName) {
          return true;
        } else {
          return false;
        }
      });
      this.productsFilteredArray = productsFiltered; // фтльтрованный массив потом используем в pagesCounter ниже
      return productsFiltered.slice(this.productStart, this.productEnd); // срез продуктов на вывод по 8 штук на странице
    },
    pagesCounter() {
      const pagesQuantity = Math.ceil(this.productsFilteredArray.length / 8); // определяем количество страниц
      for (let i = 2; i < pagesQuantity + 1; i++) {
        this.pages.push({
          id: i,
          class: "",
        });
      }

      this.pageEnd = pagesQuantity + 1;
      this.pagesQuantity = pagesQuantity;
    },
    getСlassLine() {
      const countItemsInLastRender = this.productsFilteredArray.length % 8; // получем остаток от деления всего количства отображаемых объектов на 8 (потому что по 8 выводится) и это и будет количством на посл странице
      if (
        countItemsInLastRender < 3 &&
        this.pageEnd - 1 === this.activePageId &&
        countItemsInLastRender > 0
      ) {
        this.classLineBox = "box projectSmall";
        this.classExamples = "examplesSmall examples";
      } else if (
        countItemsInLastRender < 5 &&
        this.pageEnd - 1 === this.activePageId &&
        countItemsInLastRender > 2
      ) {
        this.classLineBox = "box projectMedium";
        this.classExamples = "examplesMedium examples";
      } else if (
        countItemsInLastRender < 7 &&
        this.pageEnd - 1 === this.activePageId &&
        countItemsInLastRender > 4
      ) {
        this.classLineBox = "box projectMedium2";
        this.classExamples = "examplesMedium2 examples";
      }
      else {
        this.classLineBox = "box project";
        this.classExamples = "examples";
      }
    },
  },
  computed: {
    slicePages() {
      return this.products.slice(this.pageStart, this.pageEnd); // срез страниц
    },
  },
};
</script>
