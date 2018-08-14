<template>
    <div class="container" @click="clickHandle">
        <div class="message">{{msg}}</div>
        <!-- <click-counter :init-num="10" @clicknum="handleClickNum"/>
        <click-counter :init-num="20" @clicknum="handleClickNum"/>
        <click-counter :init-num="30" @clicknum="handleClickNum"> -->
            <!--填坑用-->
            <!-- <input type="checkbox"/> -->
        <!-- </click-counter> -->
        <div>计数结果: {{ count }}</div>
        <a href="/pages/testVuex/main" class="navlink">进入计数器页面</a>
    </div>
</template>
<script>
// 导入 click-counter组件
import clickCounter  from '@/components/click-counter';
// 导入store
import globalStore from '../../stores/global-store';
export default {
    computed: {
        count() {
            return globalStore.state.count;
        }
    }
}
// export default {
//   components: { clickCounter },
//   data() {
//     return {
//       msg: "Hello"
//     };
//   },
//   methods: {
//     clickHandle() {
//       this.msg = "Clicked!!!!!"
//     },
//     handleClickNum(data){
//         console.log(">>>>>>>>>>",data.num);
//     }
//   },

// }
</script>
<style scoped>
.message {
  color: red;
  padding: 10px;
  text-align: center;
}
</style>
