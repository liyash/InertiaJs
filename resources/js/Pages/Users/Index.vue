<template>
<app-layout>

<div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">

    <div class="flex justify-between">
        <div class="flex items-center">

        <h1 class="text-3xl">List Users</h1>
        <Link class="text-blue-500 hover:underline ml-3" href="usercreate"> Add User</Link>
        </div>
        <input  v-model="params.search" type="text" placeholder="Search.." />
    </div>
<div class="overflow-x-auto">
  <table class="min-w-full text-sm divide-y-2 divide-gray-200">
    <thead>
      <tr>
        <th
          class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap"
        >
          Name
        </th>
        <th
          class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap"
        >
          Email
        </th>
        <th
          class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap"
        >
          Role
        </th>
        <th
          class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap"
        >
          Photo
        </th>
      </tr>
    </thead>

    <tbody class="divide-y divide-gray-200">
      <tr  v-for="user in users.data" :key="user.id">
        <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
          {{user.name}}
        </td>
        <td class="px-4 py-2 text-gray-700 whitespace-nowrap">{{user.email}}</td>
        <td class="px-4 py-2 text-gray-700 whitespace-nowrap">Not Defined</td>
        <td class="px-4 py-2 text-gray-700 whitespace-nowrap">
            <img :src="user.profile_photo_url" width="100" :alt="user.name" />
        </td>
      </tr>

     
    </tbody>
  </table>
</div>
<div class="mt-6">
    Pages : 
    <Component :is="link.url?'Link':'span'" v-for="link in users.links" :data={search:params.search}   :href="link.url" :key="link.label" v-html="link.label" class="px-1"  />
</div>
</div>
</div>
</div>
    </app-layout>

</template>
<script>
import AppLayout from '../../Layouts/AppLayout.vue'

export default {
    data(){
        return{
            params:{
                search:null
            }
        }
    },
    components:{
        AppLayout
        },
    props:{
        appname:String,
        frameworks:Array,
        users:Object
    },
    watch:{
        params:{
            deep:true,
            handler(){
                this.$inertia.get(this.route('users'),this.params,{replace:true,preserveState:true});
            }
        }
    }
}

</script>