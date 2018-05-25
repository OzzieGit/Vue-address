<template>
  <div id="app">
    <addressHead></addressHead>
    <router-view />
  </div>
</template>

<script>
  import AddressHead from './components/addressHead'
  export default {
    name: 'App',
    components:{
      AddressHead
    }
  }
</script>

<style>
  *{ margin: 0; padding: 0; list-style: none; text-decoration: none; }
  a, a:hover, a:active, a:visited, a:link, a:focus{ -webkit-tap-highlight-color:rgba(0,0,0,0); -webkit-tap-highlight-color: transparent; -webkit-user-select: none; -moz-user-focus: none; -moz-user-select: none; outline:none; background: none; text-decoration: none; }
  html,body{ width: 100%; font-size: 0.28rem; }
  body{ font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif; }
  #app{ width: 7.5rem; margin: 0 auto; padding-top: 0.98rem; }
</style>
