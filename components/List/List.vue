<template>
    <div class="table">
        <div class="table__header">
            <p>City name</p>
            <p>Temp</p>
            <p>Max temp</p>
            <p>Min temp</p>
            <p>weather</p>
            <p>weather description</p>
        </div>
        
            <Listitem 
                v-for="row in weather_data"
                :key="row.name"
                :list_data = "row" />
    </div>
</template>


<script>
import Listitem from '../List/Listitem';

export default {
    name:'List',
    components:{
        Listitem
    },
    props:{
        weather_data:{
            type: [],
            default: () =>{
                return [];
            }
        }
    },
    data(){
        return {}   
    },
    computed:{

    }
}
</script>

