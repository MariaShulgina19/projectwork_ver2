<template>
<!-- MY FLEET  -->
  <div class="allships">
    
    

    <div class="label">

      <button class="Buttion1" v-on:click ="Showcontent">{{ msg6 }}</button> 
    </div>
    

    <div class="content" v-show="isOpen" style="max-height: 300px; overflow-y:auto;">
          
          <br>
          <br>
          
          <table class="vessels">

            <tr>
              <th>Vessel name</th>
              <th>MMSI / Maritime Mobile Service Identity</th>
              <th>Action</th>
              <!-- <th >Id</th> -->
            </tr>

          

            <tr v-for= "item in allShips" v-bind:key = "item.id"> 
              
              
              <td> <input class=input1 type="text" name="vessel_name" placeholder="Vessel name" v-model="item.vessel_name"> </td>
              <td> <input class=input1 type="number" name="vessel_mms" placeholder="Vessel MMSI" v-model="item.vessel_mms"> </td>
              <td> <button class=button1 type="button" @click="deleteVessel(item._id)">Delete</button>
                   <button class=button1 type="button" @click="updateVessel(item._id)">Update</button>
              </td>
              <!-- <td>{{item._id}}</td> -->
            </tr>

            <tr > 
              <td> <input class=input1 type="text" name="vessel_name2" placeholder="Vessel name" v-model="vessel_name"> </td>
              <td> <input class=input1 type="number" name="vessel_mms2" placeholder="Vessel MMSI" v-model="vessel_mms"> </td>
              <td> <button class=button1 type="button" @click="addVessel">Add vessel</button></td>
              <td> </td>
            </tr>
            
          </table>           
    </div>
  </div>
</template>

<script>
import axios from 'axios';




export default {
  name: 'AllShips',
  props: {
    msg6: String,  
  },
  data: function() {
      return {
    allShips: null,
    vessel_name: null, //new items
    vessel_mms: null,  //new items
    //added to check update
  
    isOpen: false,
    
    newadress: `http://localhost:8081/api/parameters`, 
    newadress2: `http://localhost:8081/api/parameter`, 
    newadress3: `http://localhost:8081/api/parameter/`, 
    
    
      } //return end
      }, //data end


      
    methods:{
    
          Showcontent: function(){
          
           this.isOpen = !this.isOpen; //this.isOpen if just open this
            },

          showVessels: function(){
            axios.get(this.newadress)  //
                  
           .then(response => {
             
                this.allShips = response.data

                // }//response end
                }).catch (function(error){
                  console.log(error);
            });

          },
          
          addVessel: function(){

            axios.post(this.newadress2, {
                  vessel_name : this.vessel_name,
                  vessel_mms: this.vessel_mms

            }).catch (function(error){ 
                  console.log(error);
            }).then(() => {this.showVessels()});

            

          },

        
          deleteVessel: function(id){
              axios.delete(this.newadress3+id)
              
             
              .catch (function(error){
                  console.log(error);
              }).then(() => {this.showVessels()});
             
          },

          updateVessel: function(id){ // Update does not work properly, could not pick up new name
              console.log('trying to put');
              console.log(this.newadress3+id);
              console.log(id);
              


              for (var i=0; i<this.allShips.length; i++) {
                console.log(this.allShips[i]._id);
                if (this.allShips[i]._id==id) {              // if (i._id=id) {
                                
                                axios.put(this.newadress3+id, {
                                    vessel_name : this.allShips[i].vessel_name,//this.vessel_name, allShips.vessel_name
                                    vessel_mms: this.allShips[i].vessel_mms
                                     })
            
              
             
                                .catch (function(error){
                                    console.log(error);
                                }).then(() => {this.showVessels()})
             
                }
              }
        },
    },

    created(){ 

      this.showVessels()
         // catch end

}// created end

   } //export default end

</script>
<style >


</style>
