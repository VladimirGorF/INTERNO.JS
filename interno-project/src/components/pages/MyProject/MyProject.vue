<template>
  <div class="box">
    <div class="box__lineMainBox">
      <div class="lineBox">
        <div class="box project"></div>
        <div class="box project"></div>
        <div class="box project"></div>
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
        <div class="blogPageContent" id="chen">
          <div class="examples">
            <!-- это под VUE раздел -->
            <ExampleItem
              v-for="item in sliceProducts()"
              :key="item.id"
              :item="item"
            />
            <!-- Нужно забиндить :item = "item" чтобы его увидел дочерний компонент тогда он попает в его Props -->
          </div>
          <div class="pagination">
            <div class="pagBox">
              <a
                class="page"
                @click="
                  backPage();
                  makeSound();
                  getProducts(activePageId, 8);
                  sliceProducts();
                  pagesCounter();
                "
                >&lt;</a
              >
              <a
                class="page"
                v-for="page in slicePages"
                :key="page.id"
                :class="{ active: page.id === activePageId }"
                @click="
                  activePageId = page.id;
                  makeSound();
                  getProducts(page.id, 8);
                  movePage(page.id);
                  sliceProducts();
                  pagesCounter();
                "
                >0{{ page.id }}</a
              >
              <a
                class="page"
                @click="
                  forwardPage();
                  makeSound();
                  getProducts(activePageId, 8);
                  sliceProducts();
                  pagesCounter();
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
  data() {
    return {
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
          title: "Minimal Bedroom.",
          text: "Decor / Artchitecture",
          type: "Bathroom",
        },
        {
          id: 1,
          url: "projectPageImages/2.svg",
          title: "Minimal Bedroom.",
          text: "Decor / Artchitecture",
          type: "Bathroom",
        },
        {
          id: 2,
          url: "projectPageImages/3.svg",
          title: "Minimal Bedroom.",
          text: "Decor / Artchitecture",
          type: "Bathroom",
        },
        {
          id: 3,
          url: "projectPageImages/4.svg",
          title: "Classic Minimal Bedroom.",
          text: "Decor / Artchitecture",
          type: "Bathroom",
        },
        {
          id: 4,
          url: "projectPageImages/5.svg",
          title: "Modern Bedroom.",
          text: "Decor / Artchitecture",
          type: "Bathroom",
        },
        {
          id: 5,
          url: "projectPageImages/6.svg",
          title: "Minimal Bedroom.",
          text: "Decor / Artchitecture",
          type: "Bathroom",
        },
        {
          id: 6,
          url: "projectPageImages/7.svg",
          title: "Minimal Bedroom.",
          text: "Decor / Artchitecture",
          type: "Bathroom",
        },
        {
          id: 7,
          url: "projectPageImages/8.svg",
          title: "Classic Minimal Bedroom.",
          text: "Decor / Artchitecture",
          type: "Bathroom",
        },
        {
          id: 8,
          url: "projectPageImages/1.svg",
          title: "Modern Bedroom.",
          text: "Decor / Artchitecture",
          type: "Bathroom",
        },
        {
          id: 9,
          url: "projectPageImages/2.svg",
          title: "Minimal Bedroom.",
          text: "Decor / Artchitecture",
          type: "Bathroom",
        },
        {
          id: 10,
          url: "projectPageImages/3.svg",
          title: "Minimal Bedroom.",
          text: "Decor / Artchitecture",
          type: "Bathroom",
        },
        {
          id: 11,
          url: "projectPageImages/4.svg",
          title: "Minimal Bedroom.",
          text: "Decor / Artchitecture",
          type: "Bathroom",
        },
        {
          id: 12,
          url: "projectPageImages/5.svg",
          title: "Classic Minimal Bedroom.",
          text: "Decor / Artchitecture",
          type: "Bed Room",
        },
        {
          id: 13,
          url: "projectPageImages/6.svg",
          title: "Modern Bedroom.",
          text: "Decor / Artchitecture",
          type: "Bed Room",
        },
        {
          id: 14,
          url: "projectPageImages/7.svg",
          title: "Minimal Bedroom.",
          text: "Decor / Artchitecture",
          type: "Kitchan",
        },
        {
          id: 15,
          url: "projectPageImages/8.svg",
          title: "Minimal Bedroom.",
          text: "Decor / Artchitecture",
          type: "Kitchan",
        },
        {
          id: 16,
          url: "projectPageImages/1.svg",
          title: "Classic Minimal Bedroom.",
          text: "Decor / Artchitecture",
          type: "Living Area",
        },
        {
          id: 17,
          url: "projectPageImages/1.svg",
          title: "Modern Bedroom.",
          text: "Decor / Artchitecture",
          type: "Living Area",
        },
        {
          id: 18,
          url: "projectPageImages/2.svg",
          title: "Modern Bedroom.",
          text: "Decor / Artchitecture",
          type: "Living Area",
        },
        {
          id: 19,
          url: "projectPageImages/3.svg",
          title: "Modern Bedroom.",
          text: "Decor / Artchitecture",
          type: "Living Area",
        },
        {
          id: 20,
          url: "projectPageImages/4.svg",
          title: "Modern Bedroom.",
          text: "Decor / Artchitecture",
          type: "Living Area",
        },
        {
          id: 21,
          url: "projectPageImages/5.svg",
          title: "Modern Bedroom.",
          text: "Decor / Artchitecture",
          type: "Living Area",
        },
        {
          id: 22,
          url: "projectPageImages/6.svg",
          title: "Modern Bedroom.",
          text: "Decor / Artchitecture",
          type: "Living Area",
        },
        {
          id: 23,
          url: "projectPageImages/7.svg",
          title: "Modern Bedroom.",
          text: "Decor / Artchitecture",
          type: "Living Area",
        },
        {
          id: 24,
          url: "projectPageImages/8.svg",
          title: "Modern Bedroom.",
          text: "Decor / Artchitecture",
          type: "Living Area",
        },
        ,
        {
          id: 25,
          url: "projectPageImages/1.svg",
          title: "Modern Bedroom.",
          text: "Decor / Artchitecture",
          type: "Bed Room",
        },
        {
          id: 26,
          url: "projectPageImages/2.svg",
          title: "Modern Bedroom.",
          text: "Decor / Artchitecture",
          type: "Bed Room",
        },
        {
          id: 27,
          url: "projectPageImages/3.svg",
          title: "Modern Bedroom.",
          text: "Decor / Artchitecture",
          type: "Bed Room",
        },
        {
          id: 28,
          url: "projectPageImages/4.svg",
          title: "Modern Bedroom.",
          text: "Decor / Artchitecture",
          type: "Bed Room",
        },
        {
          id: 29,
          url: "projectPageImages/5.svg",
          title: "Modern Bedroom.",
          text: "Decor / Artchitecture",
          type: "Bed Room",
        },
        {
          id: 30,
          url: "projectPageImages/6.svg",
          title: "Modern Bedroom.",
          text: "Decor / Artchitecture",
          type: "Bed Room",
        },
        {
          id: 31,
          url: "projectPageImages/7.svg",
          title: "Modern Bedroom.",
          text: "Decor / Artchitecture",
          type: "Bed Room",
        },
        {
          id: 32,
          url: "projectPageImages/8.svg",
          title: "Modern Bedroom.",
          text: "Decor / Artchitecture",
          type: "Bed Room",
        },
        {
          id: 33,
          url: "projectPageImages/7.svg",
          title: "Modern Bedroom.",
          text: "Decor / Artchitecture",
          type: "Kitchan",
        },
        {
          id: 34,
          url: "projectPageImages/8.svg",
          title: "Modern Bedroom.",
          text: "Decor / Artchitecture",
          type: "Kitchan",
        },
        ,
        {
          id: 35,
          url: "projectPageImages/1.svg",
          title: "Modern Bedroom.",
          text: "Decor / Artchitecture",
          type: "Kitchan",
        },
        {
          id: 36,
          url: "projectPageImages/2.svg",
          title: "Modern Bedroom.",
          text: "Decor / Artchitecture",
          type: "Kitchan",
        },
        {
          id: 37,
          url: "projectPageImages/3.svg",
          title: "Modern Bedroom.",
          text: "Decor / Artchitecture",
          type: "Kitchan",
        },
        {
          id: 38,
          url: "projectPageImages/4.svg",
          title: "Modern Bedroom.",
          text: "Decor / Artchitecture",
          type: "Kitchan",
        },
        {
          id: 39,
          url: "projectPageImages/5.svg",
          title: "Modern Bedroom.",
          text: "Decor / Artchitecture",
          type: "Kitchan",
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
    filterToggle(toggle) {
      this.activeToggleName = toggle;
      this.pageEnd = 2; // а дальше функциями ниже он изменится
      this.sliceProducts(); // обновляем филльтрацию
      this.pagesCounter(); // вызываем счетчик страниц при включении Тоггла
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
        this.productEnd = step * page;  // был + 1
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
      this.productsFilteredArray = productsFiltered;
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
      console.log(pagesQuantity);
      this.pageEnd = pagesQuantity + 1;
      this.pagesQuantity = pagesQuantity;
    },
  },
  computed: {
    slicePages() {
      return this.products.slice(this.pageStart, this.pageEnd); // срез страниц
    },
  },
};
</script>
