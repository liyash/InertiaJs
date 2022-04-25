<template>
    <nav class="">
        <ul class="flex list-disc space-x-4 list-inside">
           
            <li>
                <NavLink :active="$page.component==='Welcome'" linkRef="/"    >Home</NavLink>
            </li>
            <li>
                <NavLink :active="$page.component==='Users'"  linkRef="users" >Users</NavLink>
            </li> 
            <li>
                <NavLink :active="$page.component==='Products'"  linkRef="products" >Products</NavLink>
            </li>                 
            <li>
                <NavLink :active="$page.component==='Settings'"  linkRef="settings" >Settings</NavLink>

            </li>
            <li class="flex text-blue-500 hover:underline">
            <form @submit.prevent="logout()">
            <button as="button" type="submit">
                    Logout
            </button>
            </form>
                
            </li>
            
        </ul>
    </nav>
</template>
<script>
import NavLink  from './NavLink';
import {Link} from '@inertiajs/inertia-vue';
export default {
    components:{NavLink,Link},
    methods:{
        logout() {
            this.$inertia.post(route('logout'));
        },
    }

}
</script>