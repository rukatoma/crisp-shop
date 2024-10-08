<script setup>
import Input from '../components/Input.vue'
import SubmitButton from '../components/SubmitButton.vue'
import RoutePath from '../components/RoutePath.vue'
import PageTitle from '../components/PageTitle.vue'
import ContentTitle from '../components/ContentTitle.vue'
import BackLink from '../components/BackLink.vue'
import { RouterLink, useRoute } from 'vue-router'

const pageName = 'Create new customer account'

const user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
}
</script>

<template>
    <main class="flex flex-col items-center justify-center">
        <div class="text-center">
            <RoutePath :page="pageName" />
            <PageTitle :title="pageName" />
        </div>
        <form action="/" method="POST" class="register-form flex flex-col justify-center items-center border-gray-200 border-2 w-full border-devider border-2">
            <div class="flex flex-col gap-4">
                <ContentTitle title="Personal information" />
                <div class="input-wrap flex items-center">
                    <label for="first-name" class="require text-liteblack font-service">First name</label>
                    <Input type="text" placeholder="First name" name="first-name" v-model="user.firstName" />
                </div>
                <div class="input-wrap flex items-center">
                    <label for="first-name" class="require text-liteblack font-service">Last name</label>
                    <Input type="text" placeholder="Last name" v-model="user.lastName" />
                </div>
                <ContentTitle title="Sign up for newsletter" />
                <div class="input-wrap flex items-center">
                    <label for="first-name" class="require text-liteblack font-service">Email</label>
                    <Input type="email" placeholder="Email" v-model="user.email"  />
                </div>
                <div class="input-wrap flex items-center">
                    <label for="first-name" class="require text-liteblack font-service">Password</label>
                    <Input type="password" placeholder="Password" v-model="user.password"  />
                </div>
                <div class="input-wrap flex items-center">
                    <label for="first-name" class="require text-liteblack font-service">Password</label>
                    <Input type="password" placeholder="Password" />
                </div>
                <div class="flex items-center justify-between mt-10">
                    <SubmitButton name="Create an account" @click="console.log(user)" />
                    <BackLink text="Back" />
                </div>
            </div>
        </form>
    </main>
</template>

<style scoped>
label.require::after {
    content: "*";
    color: red;
    margin-left: 10px;
}

.register-form {
    max-width: 1450px;
    min-height: 845px;
    margin-bottom: 40px;
}

.input-wrap {
    display: grid;
    grid-template-columns: 160px 440px;
}
</style>
