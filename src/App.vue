<script setup>
import {onMounted, reactive, ref } from 'vue';
import { useMouse } from './assets/js/mouse.js'
import MyModal from './components/MyModal.vue'

let answer = ref('');

const yesOrNo = async() => {
    
    const response = await fetch('https://yesno.wtf/api');
    const result =  await response.json();
    answer = result.answer;
};


yesOrNo();

const callMyName = {
  firstName:'alex',
  lastName:'Hwang',
  age:20,
  address:'Nowon',
  func1:(name)=>{console.log(name)},
  setName:(f, l) =>{
    callMyName.firstName = f;
    callMyName.lastName = l;
  },
  setAge:(age)=>{callMyName.age = age},
  getAge:()=>callMyName.age,
  getAddress:()=>callMyName.address,
  setAddress:(address)=>callMyName.address = address,
};

callMyName.func1(callMyName.firstName + ' ' + callMyName.lastName)

callMyName.setName('Look','Good')
callMyName.func1(callMyName.firstName + ' ' + callMyName.lastName);

const goHell = {
  list:['He','She','They'],
  doGoHell:(index)=>{
    console.log("congraturation You go to hell: ", goHell.list[index]);
  },
  doNotGoHell:(index)=>{
    console.log("Sorry You stay here!!: ", goHell.list[index]);
  },
  addList:(target)=>{
    goHell.list.push(target);
  },
  showList:()=>console.log(goHell.list),
}

console.log(goHell.list)

function getData(id)
{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve({id});
      reject(new Error("Something Wrong happened!"))
    },3000);
  })
}

async function getName()
{
  const promise =  new Promise((resolve, reject)=>
  {
    setTimeout(()=>
    {
      resolve({name:'Karl Maxx'});
      reject(new Error("Something Wrong happened!"))
    },3000);
  });
  
  try
  {
    let result = await promise; 
    idInfo.name = result.name 
  }
  catch(e)
  {
    console.log(e);
  }    
}


const idInfo = reactive({id:30, name:'HOho'});

const {x, y} = useMouse();

onMounted(()=>{
  getData(120).then(result=>{idInfo.id = (result.id)});
  getName();
  
});

const vFocus = {
  mounted: (el) => el.focus(),
  unmounted(el) {
    console.log(el)
  },
}

const vColor = {
  mounted:(el,binding) => {
    el.style.color = binding.value;
  },
}

const vFontSize = {
  mounted:(el,binding) => {
    el.style.fontSize = binding.value;
  },
}


const color = 'red';
const bigFont = '36px';

const items = reactive(['apple','pinapple','mango','orange','madarin','java']);
const addItem = ()=>{
  items.push('something.');
}
const removeItem = ()=>{
  const randomNumber = Math.floor(Math.random() * items.length);
  console.log(randomNumber)
  items.splice(randomNumber,1);
}

const disabled = ref(false)

function warnDisabled() {
  disabled.value = true
  setTimeout(() => {
    disabled.value = false
  }, 1500)
}

console.log(1)
console.log(2)
console.log(3)

// console.log(4)
// console.log(5)
</script>

<template>
  <titl>Go Hell</titl>

  <section>New Box</section>

  <section>Old Box</section>
  <p>{{ answer }}</p>
  <p>{{idInfo}}</p>
  <span>X : {{x}}</span> |
  <span>Y : {{y}}</span>
  <input v-focus v-color="color">
  <span v-font-size="bigFont">BigFont</span>

  <h1>{{ $translate('greetings.hello') }}</h1>
  <h1>{{ $translate('eating.have') }}</h1>

  <button type="button" class="btn btn-primary" @click="addItem">add item</button>
  <button type="button" class="btn btn-primary" @click="removeItem">Remove item</button>
  <TransitionGroup name="list" tag="div">
    <li v-for="item in items" :key="item">
      {{ item }}
    </li>
  </TransitionGroup>

  <div :class="{ shake: disabled }">
    <button @click="warnDisabled" :disabled="disabled">Click me</button>
    <span v-if="disabled">This feature is disabled!</span>
  </div>

  <div class="outer">
  <h3>Vue Teleport Example</h3>
  <div>
    <MyModal />
  </div>
</div>

</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
