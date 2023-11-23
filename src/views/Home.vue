<script setup lang="ts">
import qiochan from '../assets/qiochan.png'
import { ref } from 'vue';
import axios from 'axios';

const repos = ref("获取中...");
const posts = ref("获取中...");

function getRepo1() {
  return axios.get("https://api.github.com/users/jz0ojiang")
}

function getRepo2() {
  return axios.get("https://api.github.com/users/im0o")
}

function getPosts() {
  return axios.get("https://blog.im0o.top/api/getPostCount/")
}

axios.all([getRepo1(), getRepo2()])
  .then(axios.spread((...responses) => {
    repos.value = responses[0].data.public_repos + responses[1].data.public_repos;
  }))
  .catch(errors => {
    repos.value = "获取仓库数量失败";
    console.log(errors);
  })

getPosts().then(res => {
  posts.value = res.data.data.count;
}).catch(err => {
  posts.value = "获取文章数量失败";
  console.log(err);
})


</script>

<template>
  <div class="container">
    <div class="space"></div>
    <div class="img">
      <img :src="qiochan" />
    </div>

    <div class="space"></div>
    <div class="content">
      <h1>0o酱</h1>
      <div class="desc">
        <p>互联网爱好者，从 2010 年开始接触计算机</p>
        <p>比较没有主见的福瑞控，设定是 🐕柴犬+🦊狐狸</p>
        <p>web 全栈大菜狗 | Vue.js | Go | Python</p>
        <p>已发表文章： {{ posts }}</p>
        <p>开源仓库数： {{ repos }}</p>
      </div>
      <div class="links">
        <a href="https://github.com/jz0ojiang" target="_blank" rel="noopener noreferrer" title="Github">
          <i class="ri-github-line"></i>
        </a>
        <a href="tencent://snsapp/?cmd=2&ver=1&uin=2773173293" target="_blank"
          rel="noopener noreferrer" title="QQ">
          <i class="ri-qq-line"></i>
        </a>
        <a href="https://twitter.com/jz0ojiang" target="_blank" rel="noopener noreferrer" title="Twitter">
          <i class="ri-twitter-line"></i>
        </a>
        <a href="https://t.me/@jz0ojiang" target="_blank" rel="noopener noreferrer" title="Telegram">
          <i class="ri-telegram-line"></i>
        </a>
        <a href="mailto:hi@im0o.top" title="Mail to me">
          <i class="ri-mail-line"></i>
        </a>
        <a href="https://blog.im0o.top" class="toblog">看看博客 >></a>
        <!-- <a href="https://blog.im0o.cn" class="toblog">看看博客 >></a> -->
      </div>
    </div>
    <div class="space"></div>
  </div>
  <div class="footer">
    <a href="https://icp.gov.moe/?keyword=20210216">萌ICP备20210216号</a>
    <!-- <a href="https://beian.miit.gov.cn/" target="_blank">鄂ICP备2022014822号-1</a> -->
    <p class="line">&nbsp;|&nbsp;</p>
    <p>Copyright &copy; 2019 - percent <a href="#">0o酱</a> All Rights Reserved.</p>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  line-height: 1;
  a {
    color: #CCC;
    margin: 0;
  }
  p {
    color: #CCC;
    font-size: .9rem;
    margin: 0;
  }
}
.content {
  line-height: 1;
  text-align: left;
  h1 {
    font-weight: 900;
    font-size: 3.75rem;
    line-height: .75;
  }

  .desc {
    p {
      font-weight: normal;
      line-height: 60%;
      font-size: 1.05rem;
      color: #666;
      white-space: nowrap;
    }
  }

  .links {
    line-height: 2;
    display: flex;
    align-items: center;
    i {
      font-size: 1.5rem;
      cursor: pointer;
    }
    
    i:hover {
      color: #79b0e0;
    }
    
    a {
      margin-right: .7rem;
      color: #000;
    }
    .toblog {
      color: #F47F2C;
    }
  }
}

.container {
  display: grid;
  // justify-content: space-evenly;
  justify-items: center;
  grid-template-columns: 1fr 1fr clamp(0fr, 0.1fr, 0.2fr) 1fr 1fr;
  grid-row: 1fr;
  align-items: center;
  width: 100vw;
  height: 100vh;
}

@media screen and (max-width: 768px) {
  .footer {
    position: relative;
    flex-direction: column;
    .line {
      display: none;
    }
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .img {
    width: clamp(100px, 60%, 220px) !important;
    height: clamp(100px, 60%, 220px) !important;
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }
  .img:hover {
    height: auto !important;
    transition: all .4s ease 0s;
    img {
      transform: scale(0.8) !important;
    }
  }

  .content {
    grid-column: 1 / 3;
    grid-row: 2 / 4;
    text-align: center;

    h1 {
      font-size: 2.5rem;
    }
  }
  .links {
    justify-content: center;
  }
}


.img {
  box-shadow: inset 0px 0px 0px 9px rgb(255 255 255 / 30%);
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  // background-image: url(https://image.im0o.top/files/202112021204213.jpg);
  background-image: url(/avatar.png);

  width: 280px;
  height: 280px;

  background-size: contain;
  background-repeat: no-repeat;

  -webkit-animation: morph 8s ease-in-out 1s infinite;
  animation: morph 8s ease-in-out 1s infinite;

  img {
    width: 100%;
    overflow-y: hidden;
    display: none;
    transition: all .2s ease-in-out;
  }
  transition: all 0.4s ease 0s;
}
.img:hover {
  background: none;
  height: auto;
  box-shadow: none;
  img {
    display: block;
    transform: scale(1.1);
    animation-name: fadeIn; /*动画名称*/
    animation-duration: 0.8s; /*动画持续时间*/
    animation-iteration-count: 1; /*动画次数*/
    animation-delay: 0s; /*延迟时间*/
  }
}

@keyframes morph {
  0% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }

  50% {
    border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
  }

  100% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }
}

@keyframes fadeIn {
0% {
opacity: 0; /*初始状态 透明度为0*/
}
100% {
opacity: 1; /*结尾状态 透明度为1*/
}
}
@keyframes fadeOut {
0% {
opacity: 1; /*初始状态 透明度为0*/
}
100% {
opacity: 0; /*结尾状态 透明度为1*/
}
}
</style>
