<template>
    <form @submit.prevent="handleSubmit">
        <label>Name</label>
        <input type="text" v-model="name" required/>
        <label>Course</label>
        <input type="text" v-model="course" required/>
        <label>Email</label>
        <input type="text" v-model="email" required/>
        <label>Phone</label>
        <input type="text" v-model="phone" required/>
        <label>Address</label>
        <input type="text" v-model="address" required/>
        <label>Profession</label>
        <input type="text" v-model="profession" required/>
        
        <button>Add Student</button>
    </form>
</template>

<script>
 export default{
   data(){
    return {
        name: '',
        course: '',
        email: '',
        phone: '',
        address: '',
        profession: ''
    }
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
        fetch('http://localhost:3000/students', {
            method: "POST",
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