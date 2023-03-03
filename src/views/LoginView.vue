<template>
  <div>
    <div class="material_block">
      <h2>人力资源管理系统</h2>
      <form @submit.prevent="validation">
        <div class="material_input">
          <input
            id="username"
            ref="usernameRef"
            type="text"
            required
            title=""
            autocomplete="off" />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label id="mla">用户名</label>
        </div>
        <div class="material_input">
          <input
            id="password"
            ref="passwordRef"
            type="password"
            required
            title="" />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>密码</label>
        </div>
        <button
          class="btn"
          type="submit">
          登录
        </button>
      </form>
      <a href="#">没有账号？注册一个</a>
    </div>
  </div>
</template>
<script setup>
import axios from 'axios';
import qs from 'qs';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const usernameRef = ref();
const passwordRef = ref();

function validation() {
  if (usernameRef.value.value.length < 5)
    usernameRef.value.setCustomValidity('用户名必须大于5位');
  usernameRef.value.setCustomValidity('');
  passwordRef.value.setCustomValidity('');
  login();
}

function login() {
  let url = 'http://localhost:8085/demo1_war_exploded/LoginServlet';
  let params = {
    username: usernameRef.value.value,
    password: passwordRef.value.value,
  };

  axios
    .post(url, qs.stringify(params))
    .then((res) => {
      if (res.status == 200) router.push('/main');
      else usernameRef.value.setCustomValidity('用户名与密码不匹配');
    })
    .catch((err) => {
      console.error(err);
      alert('未知错误，请联系管理员');
    });
}
</script>
<style lang="css" scoped>
h2 {
  margin-top: 2rem;
  font-weight: normal;
}

.material_block {
  max-width: 325px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
  margin: 8% auto;
}

.material_input {
  position: relative;
  margin-bottom: 45px;
  margin-top: 2rem;
}

input {
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 300px;
  border: none;
  border-bottom: 1px solid #3f51b5;
  border-radius: 0px;
}

input:focus {
  outline: none;
}

label {
  color: #999;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

input:focus ~ label,
input:valid ~ label {
  font-size: 14px;
  color: #3f51b5;
  top: -20px;
}

.bar {
  position: relative;
  display: block;
  width: 315px;
}

.bar:before,
.bar:after {
  content: '';
  height: 2px;
  width: 0;
  bottom: 0px;
  position: absolute;
  background: #3f51b5;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.bar:before {
  left: 50%;
}

.bar:after {
  right: 50%;
}

input:focus ~ .bar:before,
input:focus ~ .bar:after {
  width: 50%;
}

.highlight {
  position: absolute;
  height: 60%;
  width: 325px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}

input:focus ~ .highlight {
  -webkit-animation: inputLighter 0.3s ease;
  -moz-animation: inputLighter 0.3s ease;
  animation: inputLighter 0.3s ease;
}

@-webkit-keyframes inputLighter {
  from {
    background: #3f51b5;
  }

  to {
    width: 0;
    background: transparent;
  }
}

@-moz-keyframes inputLighter {
  from {
    background: #3f51b5;
  }

  to {
    width: 0;
    background: transparent;
  }
}

@keyframes inputLighter {
  from {
    background: #3f51b5;
  }

  to {
    width: 0;
    background: transparent;
  }
}

button {
  width: 4rem;
  height: 2rem;
}

a {
  position: relative;
  bottom: 0;
  padding: 15px 0;
  text-decoration: none;
}

.btn {
  position: relative;

  display: block;
  margin: 50px auto;
  padding: 0;

  overflow: hidden;

  border-width: 0;
  outline: none;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);

  background-color: #2ecc71;
  color: #ecf0f1;

  transition: background-color 0.3s;
}

.btn:hover,
.btn:focus {
  background-color: #27ae60;
}

.btn > * {
  position: relative;
}

.btn span {
  display: block;
  padding: 12px 24px;
}

.btn:before {
  content: '';

  position: absolute;
  top: 50%;
  left: 50%;

  display: block;
  width: 0;
  padding-top: 0;

  border-radius: 100%;

  background-color: rgba(236, 240, 241, 0.3);

  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.btn:active:before {
  width: 120%;
  padding-top: 120%;

  transition: width 0.2s ease-out, padding-top 0.2s ease-out;
}
</style>
