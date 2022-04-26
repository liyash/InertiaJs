<template>

<Layout>
    <div class="flex justify-between">
        <h1 class="text-3xl">List Users</h1>
        <div>
          <Link class="text-blue-500 hover:underline" href="usercreate"> Add User</Link>
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
</Layout>
</template>
<script>
import Layout from '../../shared/Layout';

export default {
    data(){
        return{
            params:{
                search:null
            }
        }
    },
    props:{
        appname:String,
        frameworks:Array,
        users:Object
    },
    components:{Layout},
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