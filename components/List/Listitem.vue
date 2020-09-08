<template>
    <div class="table__item">
       <div class="table__item-row table__item-name">{{list_data.name}}</div>
       <div class="table__item-row table__item-temp">{{list_data.main.temp}}</div>
       <div class="table__item-row table__item-maxTm">{{list_data.main.temp_max}}</div>
       <div class="table__item-row table__item-minTm">{{list_data.main.temp_min}}</div>
       <div class="table__item-row table__item-weather">{{list_data.weather[0].main}}</div>
       <div class="table__item-row table__item-weatherDesc">{{list_data.weather[0].description}}</div>
       <v-btn @click.prevent="deleteItem(list_data.name)">Delete</v-btn>
    </div>
</template>


<script>
import { mapActions,mapGetters } from 'vuex';
export default {
    name:'Listitem',
    props:{
        list_data:{
            type: Object,
            default: () =>{
                return {}
            }
        }
    },
    data(){
        return {}   
    },
    computed:{
        ...mapGetters([
            'CITY'
        ])
    },

    methods:{
        ...mapActions([
            'DELETE_ELEMENT_FROM_VUEX'
        ]),

        deleteItem(name){
            this.DELETE_ELEMENT_FROM_VUEX(name);
        }
    },
    watch:{
        CITY(){

        }
    },
    mounted(){
    }

}
</script>

