<!--
 * @Author: 翟海祥
 * @Date: 2020-02-26 10:38:43
 * @LastEditTime: 2020-02-26 15:44:26
 * @LastEditors: 翟海祥
 * @Description:
 * @FilePath: \myBlogFront\components\home\MyHeader.vue
 -->
<template>
  <header class="MBheader">
    <nav class="MBnavBox">
      <ul class="clearfix">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>文章</a>
        </li>
      </ul>
    </nav>

  </header>
</template>

<script>
export default {
  name: 'myHeader'
}
</script>

<style lang="scss" scoped>
.MBheader{
  width: 100%;

  .MBnavBox{
    width: 800px;
    margin: 0 auto;
    box-sizing: border-box;

    ul{
      margin: 0 auto;

      li{
        float: left;
        margin-right: 70px;
        cursor: pointer;

        a{
          display: block;
          padding: 12px 5px;
        }
      }
    }
  }
}
</style>
