<template>
    <form @submit.prevent="handleSubmit">
        <label>EditName</label>
        <input type="text" v-model="name" required/>
        <label>Course</label>
        <input type="text" v-model="course" required/>
        <label>Email</label>
        <input type="text" v-model="email" required/>
        <label>Phone</label>
        <input type="text" v-model="phone" required/>
        
        <button>Edit Student</button>
    </form>
</template>

<script>
 export default{
   name:'studentEdit',
   data(){
    return {
        name: '',
        course: '',
        email: '',
        phone: '',
        address: '',
        profession: '',
        uri: 'http://localhost:3000/students/' + this.$route.params.id
    }
   },
   mounted(){
    console.log(this.$route.params.id)
    fetch(this.uri)
    .then(res => res.json())
    .then(data => {
      this.name = data.name
      this.course = data.course
      this.phone = data.phone
      this.email = data.email
      this.address = data.address
      this.profession = data.profession
    })
  },
   methods: {
    handleSubmit(){
        let project = {
            name : this.name,
            course : this.course,
            email : this.email,
            phone : this.phone,
            address : this.address,
            profession : this.profession,
        }
        fetch(this.uri, {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(project)
        }).then(()=>{
            this.$router.push('/students')
        }).catch(err => err.message)
    }
   }
 }
</script>

<style  scoped>
form {
    background: rgb(225, 222, 222);
    padding: 20px;
    border-radius: 10px;
    width:600px;
    margin:40px auto
}
label {
    display: block;
    color: #bbb;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    margin: 20px 0 10px 0

}

input{
  padding:10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
textarea{
    border:1px solid #ddd;
    padding: 10px;
    width:100%;
    box-sizing: border-box;
    height: 100px
}

form button{
    display: block;
    margin:20px auto 0;
    background: #00ce89;
    color: white;
    padding: 10px;
    border: 0;
    border-radius: 6px;
    font-size: 16px;
}
</style>