<template>
 <div class="birthday-page">
   <div class="birth-component">
     <div class="birth-component__icon">
       <img src="../assets/a9a5afbc0ad19b80ad8f1b6f662b5f8e.png" alt="">
     </div>
     <div class="birth-component__info">
       <p class="birth-component__date">Укажите дату вашего рождения</p>
       <p class="birth-component__warning">Эта информация не будет показываться в вашем общедоступном профиле.</p>
       <router-link to="" class="birth-component__question">Почему нужно указывать дату рождения?</router-link>
     </div>
     <div class="birth-component__inpts">

       <div class="birth-component__q-pa-md" style="max-width: 120px">
         <div class="q-gutter-md">
           <q-select v-model="model" :options="options" label="Standard" />
         </div>
       </div>

       <div class="q-pa-md" style="max-width: 100px">
         <div class="q-gutter-md">
           <q-select v-model="dateModel" :options="dateOptions" label="Standard" />
         </div>
       </div>

       <div class="q-pa-md" style="max-width: 130px">
         <div class="q-gutter-md">
           <q-select v-model="yearModel" :options="yearOptions" label="Standard" />
         </div>
       </div>
     </div>

     <div class="birth-component__birth-title">
       <p class="birth-component__birthDate">
         Требуется ввести дату вашего рождения
       </p>

       <p class="birth-component__birthDate-title">Укажите собственный день рождения, даже если вы создаете
         этот аккаунт для компании, домашнего животного и пр.
       </p>

     </div>

     <div class="birth-component__btn">
       <button>Далее</button>
     </div>

     <div class="birth-component__btnBack">
       <router-link to="/birth" class="back-link">Назад</router-link>
     </div>
   </div>
   <div class="entrance">
     <p>Есть аккаунт?</p>
     <div class="entrance__btnEntrance">
       <roter-link>Вход</roter-link>
     </div>
   </div>
   <div class="app-download">
     <p class="app-download__title">
       Установите приложение
     </p>
     <div class="app-download__application">
       <div class="app-download__app-store">
         <img src="../assets/photo_2021-09-08_20-03-55.jpg" alt="">
       </div>
       <div class="app-download__ios-store">
         <img src="../assets/photo_2021-09-08_20-03-33.jpg" alt="">
       </div>
     </div>
   </div>
 </div>
</template>
<script>

import {defineComponent} from 'vue'
import {ref} from 'vue'

export default {
  name: "birthday",
  setup () {
    return {
      model: ref('september'),
      dateModel: ref(1),
      yearModel: ref(2021),
      options: [
        'january','february','mart','April','september','october'
      ],
      dateOptions:[
        1,2,3,4,5,6,7,8,9,11,12,13,14,15
      ],
      yearOptions:[
        2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021
      ]
    }
  },
  data(){
    return{
      currentComponent:'birthday'
    }
  },
  methods:{
    changeComponent(){
      this.currentComponent='confirm'
    }
  }
}
</script>

<style scoped>

</style>
