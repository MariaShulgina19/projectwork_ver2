<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="HARBOURS TODAY.js App"/>
    <AllShips msg6="MY FLEET" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import AllShips from './components/AllShips.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    AllShips,
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
  margin-top: 60px;
}

.hello {
    /* border: 3px solid green;  */
    padding: 20px;
     /* margin: 20px;*/
    margin: auto;
    max-width: 500px;
    width: 100%;
    text-align: center;
/* display: inline-block;*/
}

div.allships {
  
    padding: 20px;
    margin: 20px;
    max-width: 900px;
    width: 100%;
    text-align: left;
    display: inline-block;
}
.Buttion1{

    border: 3px solid rgb(37, 87, 107);
    background-color:rgb(37, 87, 107);
    color: white;
    font-size: 20px;
    border-radius: 12px;
    padding: 20px;
     /* margin: 20px; */
    max-width: 900px;
    width: 100%;


}

.Buttion1:hover{

   border: 4px solid white;

}

.vessels{
    border-collapse: collapse;
    width: 100%;
    
    /* padding-left: 10px; */

}

.vessels td, .vessels th {
  border: 1px solid #ddd;
  padding: 8px;
}

.vessels tr:nth-child(even){background-color: #f2f2f2;}

.vessels tr:hover {background-color: #ddd;}


.vessels th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: rgb(63, 142, 173);
  color: white;
}
</style>
