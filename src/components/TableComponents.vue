<template>
  <div class="row">
    <div
      id="man"
      class="col s12">
      <div class="card material-table">
        <div class="table-header">
          <span class="table-title">员工信息表</span>
        </div>
        <table>
          <thead>
            <tr>
              <th>员工编号</th>
              <th>用户名</th>
              <th>密码</th>
              <th>年龄</th>
              <th>性别</th>
              <th>岗位</th>
            </tr>
          </thead>
          <tbody>
            <tr
              :data="personList"
              v-for="(item, index) in personList"
              :key="index">
              <td>{{ item.id }}</td>
              <td>{{ item.username }}</td>
              <td>{{ item.password }}</td>
              <td>{{ item.age }}</td>
              <td>{{ item.gender }}</td>
              <td>{{ item.job }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from 'axios';
import { ref } from 'vue';

const url = 'http://localhost:8085/demo1_war_exploded/MainServlet';
const personList = ref([]);

function init() {
  axios
    .get(url)
    .then((res) => {
      res.data.forEach((element, index) => {
        personList.value.push(res.data[index]);
      });
    })
    .catch((err) => {
      console.error(err);
    });
}

init();
</script>
<style lang="css" scoped>
div.material-table {
  padding: 0;
}

div.material-table table {
  table-layout: fixed;
  width: 70%;
}

div.material-table .table-header {
  height: 64px;
  padding-left: 24px;
  padding-right: 14px;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  display: flex;
  -webkit-display: flex;
  border-bottom: solid 1px #dddddd;
}

div.material-table .table-header input {
  margin: 0;
  height: auto;
}

div.material-table .table-header i {
  color: rgba(0, 0, 0, 0.54);
  font-size: 24px;
}

div.material-table .table-title {
  font-size: 20px;
  color: #000;
}

div.material-table table tr td {
  height: 48px;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.87);
  border-bottom: solid 1px #dddddd;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

div.material-table table tr {
  font-size: 12px;
}

div.material-table table th {
  font-size: 12px;
  font-weight: 500;
  color: #757575;
  cursor: pointer;
  white-space: nowrap;
  padding: 0;
  height: 56px;
  vertical-align: middle;
  outline: none !important;
}

div.material-table table th.sorting_asc,
div.material-table table th.sorting_desc {
  color: rgba(0, 0, 0, 0.87);
}

div.material-table table th.sorting:after,
div.material-table table th.sorting_asc:after,
div.material-table table th.sorting_desc:after {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 16px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  word-wrap: normal;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
  content: 'arrow_back';
  -webkit-transform: rotate(90deg);
  display: none;
  vertical-align: middle;
}

div.material-table table th.sorting:hover:after,
div.material-table table th.sorting_asc:after,
div.material-table table th.sorting_desc:after {
  display: inline-block;
}

div.material-table table th.sorting_desc:after {
  content: 'arrow_forward';
}

div.material-table table tbody tr:hover {
  background-color: #eee;
}

div.material-table table th:first-child,
div.material-table table td:first-child {
  padding: 0 0 0 24px;
}

div.material-table table th:last-child,
div.material-table table td:last-child {
  padding: 0 14px 0 0;
}
</style>
