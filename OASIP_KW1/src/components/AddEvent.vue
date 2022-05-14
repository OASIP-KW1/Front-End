<script setup>
import { computed } from '@vue/reactivity';
import { ref , onBeforeMount } from 'vue';
import { useRouter, useRoute } from 'vue-router'

defineEmits(['createAppointment', 'edit'])
const props = defineProps({
    categories: {
        type: Array,
        default: []
    }
})

let data = ref([])

const getDate = async () =>{
    const res = await fetch('api/events')
    if(res.status === 200) {
    data.value = await res.json()
    }
}
onBeforeMount( async () => {
   await getDate()
})

const myRouter = useRouter()
const { params } = useRoute()

const name = ref(params.name)
const email = ref(params.email)
const category = ref(params.eventCategory)
const date = ref(params.time)
const addnotes = ref(params.note)

let checked = ref(false)
let checked_email = ref(false)
let checked_time = ref(false)
let checked_date = ref(false)
let popup = ref(false)
let create = ref(true)
const edit = params.name == undefined?true:false
const view = params.name == undefined?false:true
const alldata = computed(() => {
    if (name.value == undefined || email.value == undefined || date.value == undefined || category.value == undefined
        || name.value == "" || email.value == "" || date.value == "" || category.value == "") {
        checked.value = true;
        checked_email.value = false;
        return { status: 0 }
    } else {
        if (email.value.split('@').length > 1) {
            if(isFuture()){
                // console.log(checkSchedule(datetime()));
            if(eventStartTime.value.includes(checktime()) || checkSchedule(datetime())){
                checked_time.value = true;
                checked.value = false
                checked_email.value = false
                return { status: 0 }
            }else{
            create.value = false;
            popup.value = true;
            return {
                bookingName: name.value, bookingEmail: email.value, eventCategory: {
                    "id": categoryId.value,
                    "eventCategoryName": category.value,
                    "eventCategoryDescription": null,
                    "eventDuration": null
                }, eventStartTime: datetime(), eventDuration: duration.value, eventNote: addnotes.value, status: 1 , id: params.id
            }
            }
            }else{
                checked.value = false
                checked_email.value = false
                checked_date.value = true;
                return { status: 0 }
            }
        } else {
            checked.value = false;
            checked_email.value = true;
            return { status: 0 }
        }
    }
})

const monthName = ref(['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'])

const datetime = () => {
    const disdate = new Date(date.value)
    return disdate
}

const checktime = () =>{
    const disdate = new Date(date.value)
    return `${disdate.getDate()} ${monthName.value[disdate.getMonth()]} ${disdate.getFullYear()}, 
    ${disdate.getHours()}:${disdate.getMinutes()}:${String(disdate.getSeconds()).padStart(2, '0')}`
}

const isFuture = () =>{
    const today = new Date(new Date().getTime() - 24*60*60*1000);
    const disdate = new Date(date.value)
    return disdate > today
}
const duration = computed(() => {
    const currentCategoryId = ref(0);
    for (let i = 0; i < props.categories.length; i++) {
        if (category.value == props.categories[i].eventCategoryName) {
            currentCategoryId.value = props.categories[i].eventDuration;
        }
    }
    return currentCategoryId.value;
})

const categoryId = computed(() => {
    const currentCategoryId = ref(0);
    for (let i = 0; i < props.categories.length; i++) {
        if (category.value == props.categories[i].eventCategoryName) {
            currentCategoryId.value = props.categories[i].id;
        }
    }
    return currentCategoryId.value;
})

const dataEachCategory = computed(() =>{
    const info = ref([])
    info.value = data.value.filter((item) =>{return item.eventCategory.eventCategoryName == category.value})
    return info.value
})

const eventStartTime = computed(() =>{
    const info = ref([])
    info.value = dataEachCategory.value.map((data) =>{
        return data.eventStartTime
    })
    return info.value
})

const schedule = computed(()=>{
    const info = ref([])
    info.value = eventStartTime.value.map((data) =>{
        return [new Date(data) , new Date(new Date(data).getTime() + duration.value*60*1000)]
    })
    return info.value
})

const checkSchedule = (date)=>{
    const result = ref('')
    const arrayOfBoolean = ref([])
    schedule.value.forEach((item) =>{
        arrayOfBoolean.value.push(item[0] < date && date < item[1])
    })
    arrayOfBoolean.value.forEach((item) =>{
        if(result.value == ''){
            result.value = item
        }else{
            result.value = result.value || item
        }
    })
    return result.value
}
// let a = new Date('24 May 2022, 02:40:00')
// let b = new Date('24 May 2022, 02:45:00')
// let c = new Date('24 May 2022, 02:55:00')
// console.log(a < b && b < c);
</script>
 
<template>
<div id="grad1">
    <div v-show="create">
    <div class="back">
        <p class="addtitle" v-if="view">Edit Appointment</p>
        <p class="addtitle" v-else>Appointment</p>
        <!-- edit -->
        <div class="input" v-show="view">
        Name &nbsp;<input type="text" size="50" :value="params.name" disabled>&nbsp;&nbsp;
        Email &nbsp;<input type="text" size="50" :value="params.email" disabled>
        </div>
        <!-- end edit -->
        <div class="input" v-show="edit">
            <p v-show="checked">
                <div class="alert alert-danger" role="alert">
                 Please complete the information.
                </div>
            </p>
            <p v-show="checked_email" style="color: red;">
                <div class="alert alert-danger" role="alert">
                 Please validation of the email.
                </div>
            </p>
            <!-- dup time -->
            <p v-show="checked_time" style="color: red;">
                <div class="alert alert-danger" role="alert">
                 This time has already been registered.
                </div></p>
                <!-- past day -->
            <p v-show="checked_date" style="color: red;">
                <div class="alert alert-danger" role="alert">
                Please validate that date-time is in the future.
                </div></p>
                <!-- complete -->
            <p v-show="checked_date" style="color: red;">
            <div class="alert alert-danger" role="alert">
            Please validate that date-time is in the future.
            </div></p>
            
            <!-- create -->
            <div class="addform">
            Name &nbsp;<input type="text" size="50" v-model="name" placeholder="Name" style="border-radius: 10px;">&nbsp;&nbsp;
            Email &nbsp;<input type="text" size="50" v-model="email" placeholder="Email" style="border-radius: 10px;">
            </div>
        </div>
        <br>
        <!-- create add Category-->
        <div class="select1" v-show="edit">
            <p class="select">Select Category do you need &nbsp;
            <select class="option" v-model="category" style="border-radius: 10px;">
                <option v-for="(category, index) in categories" :key="index">{{ category.eventCategoryName }}</option>
            </select>
            <span class="duration">Duration : {{duration}} minutes</span>
            </p>
        </div>
        <br>
        <!-- create + edit -->
        <div class="select2">
            <p class="textdt">Date - Time 
            <input id="party" type="datetime-local" name="partydate" v-model="date" style="border-radius: 10px;">
            </p>
        </div>
        <!-- create + edit -->
        <p class="addnotes">Add Note : </p><textarea id="notes" cols="157" rows="5" maxlength="500"
            v-model="addnotes"></textarea>
        <div class="button" v-show="edit"><button type="button" class="Close btn btn-success btn-lg"
                @click="$emit('createAppointment', alldata)">Create Appointment</button></div>
        <div class="button" v-show="view"><button type="button" class="Close btn btn-success btn-lg"
                @click="$emit('edit', alldata)">Update Appointment</button></div>
        </div>
    </div>  

    <div class="modal-dialog " role="document" v-show="popup">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Add Events / Booking</h5>
                <router-link :to="{ name: 'EventListAll' }"><button type="button" class="btn btn-default" data-dismiss="modal">X</button></router-link></div>
            <div class="modal-body">
                <p>Your appointment is complete.</p>
                <p>นัดหมายของคุณเสร็จเรียบร้อย</p>
            </div>
            <img src="../assets/complete.png" alt="complete" class="picture">
            <!-- <router-link :to="{ name: 'EventListAll' }"><button class="btnclose">close</button></router-link> -->
        </div>
    </div>
</div>

</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Changa+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Mali:wght@500&display=swap');
.duration{
    margin-left: 2.5em;
}
.modal-content{
    margin-top: -35em;
}
.modal-body{
    text-align: center;
}

.back{
    margin-top: -38em;
    padding-top: 1em;
    margin-left: 15em;
    width: 70em;
    height: 38em;    
    padding: 60px;
    /* border: 1px solid #FFD8BE; */
    background-color: aliceblue;
    border-radius: 20px;
    box-shadow: 5px 5px 10px #D0D3D4;
    /* opacity: 90%; */
}
.addnotes {
    margin-left: 3em;
    margin-top: 2em;
}
#notes{
    margin-left: 10em;
    margin-top: -2em;
    width: 82.5%;
    border-radius: 15px;
}
#party{
    width: 50%;
     margin-left: 2em;
}
.Close{
  font-family: 'Ubuntu Mono', monospace;
  border-radius: 10px;
  background-color: aquamarine;
  margin-top: 1.75em;
}
.textdt{
    margin-left: 0.5em;
}
.addform{
    margin-left: 2em;
    /* font-family: 'Mali', cursive; */
}
.picture {
    margin-top: -2em;
}
.color{
    border: #FB757E;
}

.btnclose {
    background-color: #FB757E;
    border-radius: 10px;
    font-family: 'Itim', cursive;
    font-size: medium;
    margin-left: 15em;
}

.addtitle {
    text-align: center;
    /* font-family: 'Mali', cursive; */
    font-family: 'Changa One', cursive;
    font-size: 2em;
    margin-top: -0.5em;
}

.input {
    text-align: center;
    /* font-family: 'Mali', cursive; */
}

.select3 {
    margin-left: 6em;
    font-family: 'Changa One', cursive;
    margin-top: -2.5em;
    justify-content: center;
}

.select2 {
    margin-left: 2.5em;
}
.select{
    /* font-family: 'Mali', cursive; */
    margin-left: 3em;
}

.button {
    display: flex;
    justify-content: center;
    /* padding: 15px 32px; */
    font-size: 16px;
}

.button:hover {
    color: white;
}

</style>