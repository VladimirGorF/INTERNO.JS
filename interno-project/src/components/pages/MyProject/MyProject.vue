<template>
  <div>
    <MyHeader />
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
              <a
                href="#toggleMain"
                class="page"
                @click="
                  backPage();
                  getProducts(activePageId, 8);
                  sliceProducts();
                  pagesCounter();
                  getСlassLine();
                "
                >&lt;</a
              >
              <a
                href="#toggleMain"
                class="page"
                v-for="page in slicePages"
                :key="page.id"
                :class="{ active: page.id === activePageId }"
                @click="
                  activePageId = page.id;
                  getProducts(page.id, 8);
                  movePage(page.id);
                  sliceProducts();
                  pagesCounter();
                  getСlassLine();
                "
                >0{{ page.id }}</a
              >
              <a
                href="#toggleMain"
                class="page"
                @click="
                  pagesCounter();
                  forwardPage();
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
    <MyFooter />
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>

<script>
import MyHeader from "../../MyHeader.vue";
import MyFooter from '../../MyFooter.vue'
import ExampleItem from "./ExampleItem.vue";
import MyToggle from "./MyToggle.vue";
export default {
  name: "MyProject",
  components: {
    ExampleItem,
    MyToggle,
    MyHeader,
    MyFooter
  },
  created() {
    this.filterToggle("Bathroom"); // начнем страницу с ванных
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
          url: require('/public/projectPageImages/1.svg'),
          title: "Minimal Bathroom.",
          text: "Decor / New Artchi",
          type: "Bathroom",
        },
        {
          id: 1,
          url: require('/public/projectPageImages/2.svg'),
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Bathroom",
        },
        {
          id: 2,
          url: require('/public/projectPageImages/1.svg'),
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Bathroom",
        },
        {
          id: 3,
          url: require('/public/projectPageImages/2.svg'),
          title: "Classic Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Bathroom",
        },
        {
          id: 4,
          url: require('/public/projectPageImages/6.svg'),
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Bathroom",
        },
        {
          id: 5,
          url: require('/public/projectPageImages/5.svg'),
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Bathroom",
        },
        {
          id: 6,
          url: require('/public/projectPageImages/6.svg'),
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Bathroom",
        },
        {
          id: 7,
          url: require('/public/projectPageImages/5.svg'),
          title: "Classic Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Bathroom",
        },

        {
          id: 8,
          url: require('/public/projectPageImages/1.svg'),
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Bathroom",
        },
        {
          id: 9,
          url: require('/public/projectPageImages/2.svg'),
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Bathroom",
        },
        {
          id: 10,
          url: require('/public/projectPageImages/3.svg'),
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Bathroom",
        },
        {
          id: 11,
          url: require('/public/projectPageImages/4.svg'),
          title: "Classic Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Bathroom",
        },
        {
          id: 12,
          url: require('/public/projectPageImages/6.svg'),
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Bathroom",
        },
        {
          id: 13,
          url: require('/public/projectPageImages/5.svg'),
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Bathroom",
        },
        {
          id: 14,
          url: require('/public/projectPageImages/7.svg'),
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Bathroom",
        },
        {
          id: 15,
          url: require('/public/projectPageImages/5.svg'),
          title: "Classic Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Bathroom",
        },

        {
          id: 16,
          url: require('/public/projectPageImages/5.svg'),
          title: "Bed Room",
          text: "Decor / Artchitecture",
          type: "Bed Room",
        },
        {
          id: 17,
          url: require('/public/projectPageImages/7.svg'),
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Bed Room",
        },
        {
          id: 18,
          url: require('/public/projectPageImages/5.svg'),
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Bed Room",
        },
        {
          id: 19,
          url: require('/public/projectPageImages/6.svg'),
          title: "Classic Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Bed Room",
        },
        {
          id: 20,
          url: require('/public/projectPageImages/4.svg'),
          title: "Bed Room",
          text: "Decor / Artchitecture",
          type: "Bed Room",
        },
        {
          id: 21,
          url: require('/public/projectPageImages/3.svg'),
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Bed Room",
        },
        {
          id: 22,
          url: require('/public/projectPageImages/2.svg'),
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Bed Room",
        },
        {
          id: 23,
          url: require('/public/projectPageImages/1.svg'),
          title: "Classic Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Bed Room",
        },

        {
          id: 24,
          url: require('/public/projectPageImages/5.svg'),
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Bed Room",
        },
        {
          id: 25,
          url: require('/public/projectPageImages/7.svg'),
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Bed Room",
        },
        {
          id: 26,
          url: require('/public/projectPageImages/5.svg'),
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Bed Room",
        },
        {
          id: 27,
          url: require('/public/projectPageImages/6.svg'),
          title: "Classic Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Bed Room",
        },
        {
          id: 28,
          url: require('/public/projectPageImages/4.svg'),
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Bed Room",
        },
        {
          id: 29,
          url: require('/public/projectPageImages/3.svg'),
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Bed Room",
        },
        {
          id: 30,
          url: require('/public/projectPageImages/2.svg'),
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Bed Room",
        },
        {
          id: 31,
          url: require('/public/projectPageImages/1.svg'),
          title: "Classic Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Bed Room",
        },

        {
          id: 32,
          url: require('/public/projectPageImages/1.svg'),
          title: "Kitchan",
          text: "Decor / Artchitecture",
          type: "Kitchan",
        },
        {
          id: 33,
          url: require('/public/projectPageImages/2.svg'),
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Kitchan",
        },
        {
          id: 34,
          url: require('/public/projectPageImages/3.svg'),
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Kitchan",
        },
        {
          id: 35,
          url: require('/public/projectPageImages/4.svg'),
          title: "Classic Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Kitchan",
        },
        {
          id: 36,
          url: require('/public/projectPageImages/6.svg'),
          title: "Modern Kitchan.",
          text: "Decor / Artchitecture",
          type: "Kitchan",
        },
        {
          id: 37,
          url: require('/public/projectPageImages/5.svg'),
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Kitchan",
        },
        {
          id: 38,
          url: require('/public/projectPageImages/7.svg'),
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Kitchan",
        },
        {
          id: 39,
          url: require('/public/projectPageImages/5.svg'),
          title: "Classic Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Kitchan",
        },

        {
          id: 40,
          url: require('/public/projectPageImages/5.svg'),
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Kitchan",
        },
        {
          id: 41,
          url: require('/public/projectPageImages/7.svg'),
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Kitchan",
        },
        {
          id: 42,
          url: require('/public/projectPageImages/5.svg'),
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Kitchan",
        },
        {
          id: 43,
          url: require('/public/projectPageImages/6.svg'),
          title: "Classic Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Kitchan",
        },
        {
          id: 44,
          url: require('/public/projectPageImages/4.svg'),
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Kitchan",
        },
        {
          id: 45,
          url: require('/public/projectPageImages/3.svg'),
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Kitchan",
        },
        {
          id: 46,
          url: require('/public/projectPageImages/2.svg'),
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Kitchan",
        },
        {
          id: 47,
          url: require('/public/projectPageImages/1.svg'),
          title: "Classic Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Kitchan",
        },

        {
          id: 48,
          url: require('/public/projectPageImages/5.svg'),
          title: "Living Area",
          text: "Decor / Artchitecture",
          type: "Living Area",
        },
        {
          id: 49,
          url: require('/public/projectPageImages/7.svg'),
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Living Area",
        },
        {
          id: 50,
          url: require('/public/projectPageImages/5.svg'),
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Living Area",
        },
        {
          id: 51,
          url: require('/public/projectPageImages/6.svg'),
          title: "Classic Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Living Area",
        },
        {
          id: 52,
          url: require('/public/projectPageImages/4.svg'),
          title: "Living Area",
          text: "Decor / Artchitecture",
          type: "Living Area",
        },
        {
          id: 53,
          url: require('/public/projectPageImages/3.svg'),
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Living Area",
        },
        {
          id: 54,
          url: require('/public/projectPageImages/2.svg'),
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Living Area",
        },
        {
          id: 55,
          url: require('/public/projectPageImages/1.svg'),
          title: "Classic Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Living Area",
        },

        {
          id: 56,
          url: require('/public/projectPageImages/1.svg'),
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Living Area",
        },
        {
          id: 57,
          url: require('/public/projectPageImages/2.svg'),
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Living Area",
        },
        {
          id: 58,
          url: require('/public/projectPageImages/3.svg'),
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Living Area",
        },
        {
          id: 59,
          url: require('/public/projectPageImages/4.svg'),
          title: "Classic Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Living Area",
        },
        {
          id: 60,
          url: require('/public/projectPageImages/6.svg'),
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Living Area",
        },
        {
          id: 61,
          url: require('/public/projectPageImages/5.svg'),
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Living Area",
        },
        {
          id: 62,
          url: require('/public/projectPageImages/7.svg'),
          title: "Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Living Area",
        },
        {
          id: 63,
          url: require('/public/projectPageImages/5.svg'),
          title: "Classic Minimal Bathroom.",
          text: "Decor / Artchitecture",
          type: "Living Area",
        },
      ],
    };
  },

  methods: {
    makeSound() {
      const audio = new Audio(
        require("../../../assets/sounds/jeleznaya-knopka-vyiklyucheniya1.mp3")
      );
      audio.play();
    },
    makeSoundKorotkiy() {
      const audio = new Audio(
        require("../../../assets/sounds/knopka-klik-korotkii-odinochnyii-shumnyii.mp3")
      );
      audio.play();
    },
    filterToggle(toggle) {
      this.activeToggleName = toggle;
      this.activePageId = 1;
      this.pageEnd = 2; // а дальше функциями ниже он изменится
      this.getProducts(1, 8);
      this.sliceProducts(); // обновляем фильтрацию
      this.pagesCounter(); // вызываем счетчик страниц при включении Тоггла
      this.getСlassLine(); // управление вертикальными линиями и размером сетки контента
    },
    movePage(page) {
      this.makeSoundKorotkiy();
      if (
        this.pageEnd > this.pagesQuantity + 1 ||
        page === this.pagesQuantity
      ) {
        return;
      } else if (page + 1 === this.pageEnd) {
        this.pageStart += 1;
        this.pageEnd += 1;
      } else if (page === this.pageStart && this.pageStart !== 1) {
        this.pageStart -= 1;
        this.pageEnd -= 1;
      }
    },
    forwardPage() {
      if (this.activePageId === this.pagesQuantity) {
        return;
      } else if (this.pageEnd === this.pagesQuantity + 1) {
        this.makeSoundKorotkiy();
        this.activePageId += 1;
        return;
      } else if (this.activePageId === 1) {
        this.makeSoundKorotkiy();
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
        this.makeSoundKorotkiy();
        this.pageStart = 1;
        this.pageEnd = 4;
        this.activePageId -= 1;
        return;
      } else if (this.activePageId === this.pagesQuantity) {
        this.makeSoundKorotkiy();
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
      this.productsFilteredArray = productsFiltered; // отфильтрованный массив потом используем в pagesCounter ниже
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
      } else {
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
