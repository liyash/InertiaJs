<template>
<Layout>
<h1 class="text-3xl">Hello User</h1>
</Layout>
</template>
<script>
import Layout from '../shared/Layout';
export default {
    props:{
        appname:String,
        frameworks:Array
    },
    components:{Layout}
}
</script>