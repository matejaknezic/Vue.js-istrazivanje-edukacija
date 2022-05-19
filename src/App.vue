<template>
  <nav>
    <router-link to="/">Početna</router-link> |
    <router-link to="/about">O nama</router-link>
  </nav>
  <router-view />
  <div>hello {{ person.name }}</div>
  <div> {{ person.age }}</div>
  <div v-if="person.isDev">I am a dev</div>
  <div v-else>I am not a dev</div>
  <button @click="changeProfile">Lorem ipsum</button>

  <div v-for="(item, itemIndex) in persons" :key="itemIndex">
    <p>Name: {{ item.name }}, Age: {{ item.age2 }} </p>
    <button @click="changeProfile2(itemIndex)">Lorem ipsum2</button>
  </div>

  <br><br>
  <div>Add a todo:</div>
  <input type="text" v-model="value"/>
  <button @click="addToDo">Add</button>
  <div>
    <br>
    <div>My toDo List:</div>
      <ul>
        <li v-for="item, itemIndex in list" :key="itemIndex">{{item}}</li>

      </ul>
  </div>
  <br><br>

  <div>
    <div>Lista želja: </div>
    <input type="text" v-model="value1"/>
    <button @click="dodaj">Add</button>
    <br>
    <div>Moja lista želja:</div>
    <ListaZelja :myProp="ListaZeljaArray"/>
  </div>

</template>

<script>
import ListaZelja from './components/ListaZelja.vue'
  export default {
    components:{
      ListaZelja
    },
  data(){
      return{
        toDoListArray: ['Go to dentist','Feed the cat'],
        list:['lorem ipsum dolor sit','Lorem ipsum'],
        ListaZeljaArray:['lorem ipsum', 'lorem ipsum dolor'],
        value:undefined,
        value1:undefined,
        person: {
          name:"World",
          age:25,
          isDev:true,
        },
        persons:[
          {
            name:"Ime1",
            age2:25
          },
          {
            name:"Ime2",
            age2:28
          }
        ]
      }
    },
    methods:{
      changeProfile(){
        this.person.name='Mateja',
        this.person.age=28
      },
      changeProfile2(itemIndex){
        //console.log(this.persons[itemIndex])
        this.persons[itemIndex].age2++
      },
      addToDo(){
        this.list.push(this.value)
        this.value = undefined
      },
       dodaj(){
        this.ListaZelja.push(this.value1)
        this.value1 = undefined
      }
    }
  }
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
