 <template>
<div>
 <header class="header">
   <p class="header__text">Test work</p>
 </header>

  <main class="main">

    <div class="main__find">
      <h2 class="main__text">Find city weather</h2>
      <input class="main__input" type="text"  v-model="search_input">
      <v-btn @click.prevent="onPressed(search_input)">Get weather</v-btn>
      <v-btn @click.prevent="onSaveFile()">Save to local storage</v-btn>
      <v-btn class="main__test1" @click.prevent="onUpdateFile()">Upload from the local storage</v-btn>
      <v-btn class="main__test2" @click.prevent="onClearStr()">Clear local storege</v-btn>
      <List :weather_data = 'CITY'/>
    </div>

  </main>

</div>

</template>



<script>
import axios from 'axios';
import { mapActions, Store, mapGetters } from 'vuex';
import List from '../components/List/List';

export default {

  name:'index',
  components:{
    List
  },

  computed:{
    ...mapGetters([
      'CITY'

    ])
  },

  methods:{
    ...mapActions([
      'GET_ELEMENTS_TO_VUEX',
      'GET_ELEMENTS_FROM_API',
      'SAVE_ELEMENTS',
      'UPLOAD_ELEMENTS',
      'CLEAR_LOCAL_STR'
    ]),

     onPressed(searchValue){
      this.GET_ELEMENTS_TO_VUEX(searchValue);
     this.GET_ELEMENTS_FROM_API();
    //  console.log(Store.state.searchValue);
    },
    onSaveFile(){
      this.SAVE_ELEMENTS();
    },

    onUpdateFile(){
      this.UPLOAD_ELEMENTS();
    },
    onClearStr(){
      this.CLEAR_LOCAL_STR();
    }
  },
  watch:{
    CITY(){

    }
  },
  mounted() {
    this.GET_ELEMENTS_FROM_API();
  }
}
</script>
