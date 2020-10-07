<template>
<!-- MY FLEET  -->
  <div class="allships">
  
    <div class="label">
          <br>
     
      <button class="Buttion1" v-on:click ="Showcontent">{{ msg6 }}</button> 
    </div>
  
    <div class="content" v-show="isOpen" style="max-height: 500px; overflow-y:auto;">
          
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
              <td> <input class=input2 type="text" name="vessel_name2" placeholder="Vessel name.." v-model="vessel_name"> </td>
              <td> <input class=input2 type="number" name="vessel_mms2" placeholder="Vessel MMSI.." v-model="vessel_mms"> </td>
              <td> <button class=button2 type="button" @click="addVessel">Add vessel</button></td>
              <!-- <td> </td> -->
            </tr>
            
          </table>           
    </div>
    <div> <!--MAP-->
 <br>
     <vl-map ref="map" :load-tiles-while-animating="true" :load-tiles-while-interacting="true" 
             data-projection="EPSG:4326" style="height: 400px" @pointermove="onMapPointerMove" :style="{cursor: mapCursor}" >
     <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

     <vl-layer-tile id="osm">
     <vl-source-osm></vl-source-osm>
     </vl-layer-tile>
    
      <vl-layer-vector> 
       

     <vl-source-vector v-if="loaded" :features.sync="features" ></vl-source-vector> 
      <!-- <vl-style-box>
       <vl-style-stroke color="green" :width="3"></vl-style-stroke>
       <vl-style-fill color="rgba(255,255,255,0.5)"></vl-style-fill>
      </vl-style-box> -->


        <!-- style for circle -->

        <vl-style-box>
            <vl-style-circle :radius="5">
             <vl-style-fill color="white"></vl-style-fill>
             <vl-style-stroke color="red"></vl-style-stroke>
             </vl-style-circle>
          </vl-style-box>

         <!-- POP UP <vl-overlay id="overlay"  :position="overlayCoordinate" v-show="isOpen"> -->
        <vl-overlay id="overlay"  v-if="currentPosition" :position="currentPosition">
         <template slot-scope="scope">
            <div class="overlay-content">
            <!-- <p style="font-weight: bold"> {{currentVesselName}} </p>   -->
              Position: {{ scope.position }}   <br>
              mmsi:{{ currentName }}
            </div>
        </template>
       </vl-overlay> 
      </vl-layer-vector>
    </vl-map>
  </div> 
  </div>

</template>

<script>
import axios from 'axios';
import * as proj from 'ol/proj'; 




export default {
  name: 'AllShips',
  props: {
    msg6: String,  
  },
  data: function() {
      return {
    allShips: [],
    vessel_name: null, 
    vessel_mms: null,  
 
  
    isOpen: false,
    
    //newadress: `http://localhost:8081/api/parameters`, 
    //newadress2: `http://localhost:8081/api/parameter`, 
    //newadress3: `http://localhost:8081/api/parameter/`, 


    newadress: `https://port2020.heroku.com/api/parameters`,  //7.10
    newadress2: `https://port2020.heroku.com/api/parameter`,  //7.10
    newadress3: `https://port2020.heroku.com/api/parameter/`,  // 7.10


    adress_vessel_mmsi: `https://meri.digitraffic.fi/api/v1/locations/latest/`, //+ 356364000, 
    vesselCoordinate: [],

    //for map
    zoom: 4, //12
    center: [23.03862, 63.859912],
    rotation: 0,
    mapCursor: 'default',

    //to show coordinate on the map
    myFeatureItem: null,
    features: [],
    loaded :false,

    //popup
    currentPosition: undefined,
    currentName: undefined,
    //currentVesselName: undefined,
    
    
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
                  
                
                  this.getVesselCoordinates()
                  
                  

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

          updateVessel: function(id){ 
              console.log('trying to put');
              console.log(this.newadress3+id);
              console.log(id);
              


              for (var i=0; i<this.allShips.length; i++) {
                console.log(this.allShips[i]._id);
                if (this.allShips[i]._id==id) {              
                                
                                axios.put(this.newadress3+id, {
                                    vessel_name : this.allShips[i].vessel_name,
                                    vessel_mms: this.allShips[i].vessel_mms
                                     })
            
              
             
                                .catch (function(error){
                                    console.log(error);
                                }).then(() => {this.showVessels()})
             
                }
              }
        },

        getVesselCoordinates:function(){  
            console.log("get vessel coordinates")
            
             for (var i=0; i<this.allShips.length; i++) {
                      
                      
                        axios.get(this.adress_vessel_mmsi+this.allShips[i].vessel_mms)
                        .then(response => {
                                                       
                            //pushing data to list
                            this.vesselCoordinate.push({mmsi:response.data.features[0].mmsi,coordinate:response.data.features[0].geometry.coordinates} )
                            

                            //adding features to map
                            this.myFeatureItem = 	{
                                  type: "Feature",
                                  //id: i+1,
                                  properties: {
                                    special: true,
                                    name: response.data.features[0].mmsi,
                                    //vesselname:this.vesselCoordinate[i].vesselName,
                                  },
                                  geometry: {
                                    type: "Point",
                                    coordinates: response.data.features[0].geometry.coordinates, 
                                    
                                  }
                            }

                                                        
                            this.features.push(this.myFeatureItem);
                            this.loaded= true;
                            

                          }) .catch (function(error){
                                  console.log(error);
                        });

                        
              
                  }

        },

                //wach poiner moves. Popup window with vessel coordinate when pointer on the marker
         onMapPointerMove ({ pixel }) { 
            let hitFeature = this.$refs.map.forEachFeatureAtPixel(pixel, feature => feature)

              if (hitFeature) {
                this.mapCursor = 'pointer'
                this.currentPosition = proj.transform(hitFeature.getGeometry().getCoordinates(), 'EPSG:3857', 'EPSG:4326')
                this.currentName = hitFeature.get('name') //mmsi
                // this.currentVesselName = hitFeature.get('vesselname')
              } else {
                this.mapCursor = 'default'
                this.currentPosition = this.currentName = undefined
        }
  },


 
    },

    created(){ 

      this.showVessels()
         

}// created end

   } //export default end

</script>
<style >


</style>
