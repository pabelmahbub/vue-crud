<template>
    <div class="container mt-4" v-if="students.length">
     <div class="card">

      <div class="card-header">
        <h4>Students 
          <RouterLink to="/student/create" class="btn btn-primary float-end">Add Student</RouterLink>
        </h4>
      </div>

      <div class="card-body">
        <table class="table table-bordered">

          <thead>
            <tr>
              <th>ID</th>
              <th>name</th>
              <th>course</th>
              <th>email</th>
              <th>phone</th>
              <th>address</th>
              <th>profession</th>
              <th>Settings</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(student,id) in students" :key="id">
              <td>{{ student.id}}</td>
              <td>{{ student.name }}</td>
              <td>{{ student.course }}</td>
              <td>{{ student.email }}</td>
              <td>{{ student.phone}}</td>
              <td>{{ student.address}}</td>
              <td>{{ student.profession}}</td>
              <td>
                <RouterLink :to="{path: '/student/' + id}" class="btn btn-info mx-1">Edit</RouterLink>
                <button @click="deleteProject(id)" type="button" class="btn btn-danger">Delete</button>
                <!-- //here argument id is route id: -->
              </td>
            </tr>
          </tbody>

        </table>
      </div>
     </div>
    </div>


    <h5 v-else class="text-center my-3">Loading....</h5>



</template>

<script>
export default{
 name:'students',
 data(){
   return {
    students: [],
    uri: 'http://localhost:3000/students'
    }
 },
  mounted() {
      fetch('http://localhost:3000/students')
      .then(response => response.json())
      .then(data => this.students = data)
      .catch(err => console.log(err.message))
    },
    methods: {
      //here argument id is route id:
      deleteProject(id) {
  if (confirm('Are you sure you want to delete this student?')) {
    fetch(`${this.uri}/${id}`, { method: 'DELETE' })
      .then((response) => {
        if (response.ok) {
          // Remove the deleted student from the local array
          this.students = this.students.filter((student) => student.id !== id);
        } else {
          throw new Error('Failed to delete student');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
},

  }
  }
</script>

<style scoped>

</style>