<template>
  <div>
    <body>
      <div class="main w3l">
        <h2>OOPS</h2>
        <h1>ERROR 404</h1>
        <h3>"Sorry ! the page you are looking for can't be found"</h3>
        <router-link to="/index" class="back"><h6>BACK TO HOME</h6></router-link>
        <div class="social-icons w3">
          <ul>
            <li><a class="twitter" href="#"></a></li>
            <li><a class="facebook" href="#"></a></li>
            <li><a class="pinterest" href="#"></a></li>
          </ul>
        </div>
        <div class="footer agileits">
          <p>
            Copyright © 2023 Error Page. All Rights Reserved | Design by
            <a href="#" target="_blank">Vladimir Gorbunov</a>
          </p>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'PageNotFound',
  created () {
    this.SET_NotFoundFlag(true) // переход на страницу NotFound, по умлочанию true, но  в момент создания NotFound, то передаем false
  },
  methods: {
    ...mapMutations(['SET_NotFoundFlag'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  padding: 0;
  margin: 0;
  background: #fff;
  font-family: "Source Sans Pro", sans-serif;
}
body a {
  transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
  -ms-transition: 0.5s all;
  text-decoration: none;
}
body a:hover {
  text-decoration: none;
}
body a:focus,
a:hover {
  text-decoration: none;
}
input[type="button"],
input[type="submit"] {
  transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
  -ms-transition: 0.5s all;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 23px;
  margin: 0;
  padding: 0;
  text-align: center;
}
p {
  margin: 0;
}
ul {
  margin: 0;
  padding: 0;
}
label {
  margin: 0;
}
a:focus,
a:hover {
  text-decoration: none;
  outline: none;
}
img {
  width: 100%;
}
.clear {
  clear: both;
}
/*-- //Reset Code --*/
body {
  padding-top: 100px;
  background: url("../../../public/notFoundImages/16.jpg") no-repeat 0px 0px;
  background-size: cover;
  min-height: 1550px;
}
.main {
  width: 65%;
  margin: 70px auto 0px auto;
  text-align: center;
}
.main h2 {
  font-size: 80px;
  font-weight: 400;
  color: #000;
}
.main h1 {
  font-size: 170px;
  font-weight: 400;
  color: #000;
}
.main h1 img {
  width: 11%;
}
.main h3 {
  margin: 30px 0px;
  font-size: 28px;
  font-weight: 400;
  color: #000;
}
a.back {
  display: inline-block;
  color: #000;
  border: 1px solid #000;
  padding: 7px 15px;
  margin-bottom: 30px;
}
a.back:hover {
  color: #fff;
  border: 1px solid #fff;
  transition: all 0.5s ease-in-out;
}
.main ul {
  margin: 0;
  width: 57%;
  margin: 0 auto;
}
.main ul li {
  display: inline;
}
.main ul li a {
  width: 40px;
  height: 40px;
  background: url("../../../public/notFoundImages/img-sprite.png") no-repeat -160px -43px;
  display: inline-block;
  border: none;
  background-size: 400px;
}
.main ul li a.facebook {
  background: url("../../../public/notFoundImages/img-sprite.png") no-repeat -200px -43px;
  background-size: 400px;
}
.main ul li a.pinterest {
  background: url("../../../public/notFoundImages/img-sprite.png") no-repeat -240px -43px;
  background-size: 400px;
}
.main ul li a.twitter:hover {
  background: url("../../../public/notFoundImages/img-sprite.png") no-repeat -160px
    0px;
  background-size: 400px;
}
.main ul li a.facebook:hover {
  background: url("../../../public/notFoundImages/img-sprite.png") no-repeat -200px
    0px;
  background-size: 400px;
}
.main ul li a.pinterest:hover {
  background: url("../../../public/notFoundImages/img-sprite.png") no-repeat -240px
    0px;
  background-size: 400px;
}
.footer {
  text-align: center;
  margin-top: 100px;
}
.footer p {
  font-size: 16px;
  color: #000;
}
.footer a {
  color: #000;
  font-size: 16px;
  border: none;
  padding: 0;
}
.footer a:hover {
  color: #fff;
  font-size: 16px;
}
@media (max-width: 1366px) {
  .footer {
    margin-top: 70px;
  }
}
@media (max-width: 1080px) {
  .main h1 {
    font-size: 149px;
  }
}
@media (max-width: 1024px) {
  .main h1 {
    font-size: 140px;
  }
}
@media (max-width: 991px) {
  .main h1 {
    font-size: 135px;
  }
  .main h2 {
    font-size: 75px;
  }
}
@media (max-width: 966px) {
  .main {
    width: 70%;
  }
}
@media (max-width: 966px) {
  .main {
    width: 75%;
  }
}
@media (max-width: 800px) {
  .main {
    width: 76%;
  }
  .main h1 {
    font-size: 127px;
  }
}
@media (max-width: 768px) {
  body {
    min-height: 744px;
  }
  .main {
    width: 81%;
    margin: 185px auto 0px auto;
  }
}
@media (max-width: 736px) {
  body {
    min-height: 600px;
  }
  .main {
    width: 86%;
    margin: 50px auto 0px auto;
  }
}
@media (max-width: 667px) {
  .main h1 {
    font-size: 119px;
  }
}
@media (max-width: 640px) {
  .main h1 {
    font-size: 113px;
  }
}
@media (max-width: 600px) {
  .main h1 {
    font-size: 107px;
  }
  .main h3 {
    font-size: 26px;
  }
}
@media (max-width: 568px) {
  .main {
    width: 90%;
  }
  .main h1 {
    font-size: 100px;
  }
}
@media (max-width: 480px) {
  .main h1 {
    font-size: 90px;
  }
}
@media (max-width: 414px) {
  .main {
    margin-top: 72px;
  }
  .main h1 {
    font-size: 77px;
  }
  .main h2 {
    font-size: 65px;
  }
  .footer p {
    line-height: 25px;
  }
}
@media (max-width: 384px) {
  body {
    min-height: 550px;
  }
  .main h2 {
    font-size: 52px;
  }
  .main {
    width: 98%;
    margin-top: 50px;
  }
  .main h3 {
    font-size: 23px;
  }
}
@media (max-width: 375px) {
  body {
    min-height: 557px;
  }
  .main {
    margin-top: 46px;
  }
  .main h1 {
    font-size: 74px;
  }
}
@media (max-width: 320px) {
  body {
    min-height: 464px;
  }
  .main {
    margin-top: 40px;
  }
  .main h2 {
    font-size: 45px;
  }
  .main h1 {
    font-size: 63px;
  }
  .main h3 {
    font-size: 17px;
  }
  .footer {
    margin-top: 35px;
  }
}

.box__header {
  display: none;
}
/* MyFooter {
  display: none;
} */
</style>
