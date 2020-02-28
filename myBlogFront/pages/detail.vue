<!--
 * @Author: 翟海祥
 * @Date: 2020-02-26 10:32:00
 * @LastEditTime: 2020-02-26 18:25:49
 * @LastEditors: 翟海祥
 * @Description:
 * @FilePath: \myBlogFront\pages\detail.vue
 -->
<template>
  <div class="container">
    <my-header></my-header>
    <!-- 文章列表 -->
    <div class="content">
      <ul class="MBarticle">
        <li>
          <a class="time">2月，26号 2020 17:03 pm</a>
          <h1 class="title">第二篇文章</h1>

          <h2 class="subTitle">副标题</h2>

          <p class="Introduction">我有一头小毛驴，可是我从来都不骑。我有一头小毛驴，可是我从来都不骑。我有一头小毛驴，可是我从来都不骑。我有一头小毛驴，可是我从来都不骑。我有一头小毛驴，可是我从来都不骑。我有一头小毛驴，可是我从来都不骑。我有一头小毛驴，可是我从来都不骑。我有一头小毛驴，可是我从来都不骑。我有一头小毛驴，可是我从来都不骑。</p>

          <p class="detail">事实上刻录机都快十年开动脑筋收款你打开你但是可能可能就是的可能就上课的呢就看见你看见你说的可能就可能就开始就安贷款能加上可能就上课你角度看男夹克你接口十多年健康俺是那家可能就打开能请问BBS阿达办基本基本东江环保就是编辑毕竟不是等级编号</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import MyHeader from '~/components/home/MyHeader.vue'

export default {
  components: {
    MyHeader
  },
  data(){
    return{
      height: '0',
      bgUrl: '/img/mybg.jpg',
      profile: '/img/profile.jpg',
      title: '翟子的前端小站',
      subtitle: '享受web前端，享受生活'
    }
  },
  created(){
    this.setFirstScreenHeight();
    console.log(this.height)
  },
  methods:{
    setFirstScreenHeight(){
      if(process.browser){
        this.height = window.innerHeight - 42 + 'px';

        window.onresize = (()=>{
          this.height = window.innerHeight - 42 + 'px';
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.container{
  .MBfirstScreen{
    overflow: hidden;
    background-size: cover !important;

    .MBmyInfo{
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      padding: 20px;
      background-color: rgba(0,0,0,.2);
      border-radius: 5px;

      .MBprofile{
        width: 100px;
        height: 100px;
        overflow: hidden;
        margin: 0 auto 10px auto;

        img{
          width: 100%;
        }
      }

      .title{
        font-size: 18px;
        color: #fff;
        text-align: center;
        border-bottom: 1px solid #000;
        padding-bottom: 10px;
      }

      .subtitle{
        font-size: 16px;
        color: #fff;
        text-align: center;
        margin-top: 8px;
      }
    }


  }

  .content{
    width: 800px;
    margin: 20px auto;
    padding: 0 20px;
    box-sizing: border-box;

    .MBarticle{
      .title{
        font-size: 35px;
        color: #2a6496;
        padding-bottom: 20px;
        border-bottom: 1px solid #ececec;
        margin: 10px 0;
      }

      .subTitle{
        font-size: 25px;
      }

      .Introduction{
        text-align: center;
        padding: 30px 40px;
        margin: 30px 0;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        border-left: 5px solid #eee;
        line-height: 25px;
      }

      .detail{
        margin: 20px 0;
        font-size: 16px;
        line-height: 25px;
        border-top: 1px solid #dcdcdc;
        padding: 20px 0;
      }
    }
  }
}

</style>
