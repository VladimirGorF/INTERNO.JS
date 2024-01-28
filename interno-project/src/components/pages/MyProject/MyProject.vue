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
        <div class="blogPageContent">
          <div id="chen" class="examples">
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
                href="#chen"
                class="page"
                @click="
                  backPage();
                  makeSound();
                  getProducts(activePageId, 8);
                "
                >&lt;</a
              >
              <a
                href="#chen"
                class="page"
                v-for="page in slicePages"
                :key="page.id"
                :class="{ active: page.id === activePageId }"
                @click="
                  activePageId = page.id;
                  makeSound();
                  getProducts(page.id, 8);
                  movePage(page.id);
                "
                >0{{ page.id }}</a
              >
              <a
                href="#chen"
                class="page"
                @click="
                  forwardPage();
                  makeSound();
                  getProducts(activePageId, 8);
                "
                >&gt;</a
              >
            </div>
            <a hidden>Кол-во страниц: 0{{ pagesCounter }} страниц</a>
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
      ],
    };
  },

  methods: {
    makeSound() {
      const audio = new Audio(
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/clickUp.mp3"
      );
      audio.play();
    },
    ...mapMutations(["SET_NotFoundFlag"]),
    filterToggle(toggle) {
      this.activeToggleName = toggle;
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
      this.productEnd = step * page + 1;
      this.productStart = this.productEnd - 8;
    },
    sliceProducts() {
      //фильтруем весь массив по activeToggleName
        const productsFiltered = this.products.filter((product) => {
          if (product.type === this.activeToggleName || !this.activeToggleName ) {
            return true;
          } else {
            return false;
          }
        });
        return productsFiltered.slice(this.productStart, this.productEnd); // срез продуктов на вывод по 8 штук на странице
      }
    },
  computed: {
    slicePages() {
      return this.products.slice(this.pageStart, this.pageEnd); // срез страниц
    },
    pagesCounter() {
      const pagesQuantity = Math.ceil(this.products.length / 9); // определяем количество страниц
      console.log(pagesQuantity);
      for (let i = 2; i < pagesQuantity + 1; i++) {
        this.pages.push({
          id: i,
          class: "",
        });
      }
      return (this.pagesQuantity = pagesQuantity);
    },
  },
};
</script>
