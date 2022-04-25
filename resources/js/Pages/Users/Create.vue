<template>
    <Layout>
        <form method="post" action="usercreate">
            <div class="mb-6">
                <label for="name">Name</label>
                <input type="text"
                    name="name"
                    value="" />  
            </div>
            <div class="mb-6">
                <label for="email">Email</label>
                <input type="email"
                    name="email"
                    value="" />  
            </div>
            <div class="mb-6">
                <label for="password">Password</label>
                <input type="password"
                    name="password"
                    value="" />  
            </div>
            
        </form>
    </Layout>
</template>
<script>
import Layout from '../../shared/Layout';
export default {
    components:{
        Layout
        
    }
}
</script>