<template>
<AppLayout>
     <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
        <form @submit.prevent="submitform()" >
            <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div class="max-w-md w-full space-y-8">
                    <div class="">
                    <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
                    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Add User</h2>
                    
                    </div>
                    <input type="hidden" v-model="form.id" name="id"  value="">
                    <div class="rounded-md shadow-sm -space-y-px">
                        <div>
                        <label for="name" class="block mt-8">Name</label>
                        <input v-model="form.name" id="name" name="name" type="text" autocomplete="off"  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Name">
                        <div v-if="$page.props.errors.name" class="text-red-400 text-xs" v-text="$page.props.errors.name"></div>
                        </div>
                        <div>
                        
                        
                        <label for="email" class=" mt-8">Email address</label>
                        <input v-model="form.email" id="email" name="email" type="email" autocomplete="off" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
                        <div v-if="$page.props.errors.email" class="text-red-400 text-xs" v-text="$page.props.errors.email"></div>

                        </div>
                        <div>
                        <label for="password" class="">Password</label>
                        <input v-model="form.password" id="password" name="password" type="password" autocomplete="off" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
                        <div v-if="$page.props.errors.password" class="text-red-400 text-xs" v-text="$page.props.errors.password"></div>
                        </div>
                    </div>

                    

                    <div>
                        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                            <!-- Heroicon name: solid/lock-closed -->
                            <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                            </svg>
                        </span>
                        Create
                        </button>
                    </div>
                </div>
            </div>
        </form>
                    </div>
            </div>
            </div>

</AppLayout>
</template>
<script >
import AppLayout from '../../Layouts/AppLayout.vue'

export default {
    components: {
        AppLayout
    },
    data(){
        return{
            form:{
                id:'',
                name:'',
                email:'',
                password:''
            }
        }
    },
    methods:{
        submitform(){
            this.$inertia.post(route('user-create',this.form));
        }
    }
};
 
</script>