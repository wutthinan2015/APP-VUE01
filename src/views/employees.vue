<template>
  <div class="container mt-4">
    <h2 class="mb-3">รายชื่อลูกค้า</h2>
    
    <!-- ตารางแสดงข้อมูลลูกค้า -->
    <table class="table table-bordered table-striped">
      <thead class="table-dark">
        <tr>
          <th>รหัสพนักงาน</th>
          <th>ชื่อพนักงาน</th>
          <th>แผนก</th>
          <th>เงินเดือน</th>
          <th>สถานะ</th>
          
        </tr>
      </thead>
      <tbody>
        <tr v-for="employees in employeess" :key="employees.employees_id">
          
          <td>{{ employees.emp_id }}</td>
          <td>{{ employees.full_name }}</td>
          <td>{{ employees.department }}</td>
          <td>{{employees.salary }}</td>
         
               <td>
  <span v-if="employees.active == 1">ปกติ</span>
  <span v-else>ลาออก</span>
</td>

        </tr>
      </tbody>
    </table>

    <!-- Loading -->
    <div v-if="loading" class="text-center">
      <p>กำลังโหลดข้อมูล...</p>
    </div>

    <!-- Error -->
    <div v-if="error" class="alert alert-danger">
      {{ error }}
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "employeesList",
  setup() {
    const employeess = ref([]);
    const loading = ref(true);
    const error = ref(null);

    // ฟังก์ชันดึงข้อมูลจาก API
    const fetchemployeess = async () => {
      try {
        const response = await fetch("http://localhost/App-vue01/php.api/show_employees.php");
        if (!response.ok) {
          throw new Error("ไม่สามารถดึงข้อมูลได้");
        }
        employeess.value = await response.json();
      } catch (err) {
        error.value = err.message;
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      fetchemployeess();
    });

    return {
      employeess,
      loading,
      error
    };
  }
};
</script>
