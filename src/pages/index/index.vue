<template>
    <div class="container" @click="clickHandle">
        <div class="message">{{msg}}</div>
        <click-counter :init-num="10" @clicknum="handleClickNum"/>
        <click-counter :init-num="20" @clicknum="handleClickNum"/>
        <click-counter :init-num="30" @clicknum="handleClickNum">
            <!--填坑用-->
            <input type="checkbox"/>
        </click-counter>
    </div>
</template>
<script>
// 导入 click-counter组件
import clickCounter  from '@/components/click-counter';
export default {
  components: { clickCounter },
  data() {
    return {
      msg: "Hello"
    };
  },
  methods: {
    clickHandle() {
      this.msg = "Clicked!!!!!"
    },
    handleClickNum(data){
        console.log(">>>>>>>>>>",data.num);
    }
  },

}
</script>
<style scoped>
.message {
  color: red;
  padding: 10px;
  text-align: center;
}
</style>
