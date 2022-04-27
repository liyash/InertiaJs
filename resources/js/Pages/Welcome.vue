<template>
    <app-layout>
<div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">        <h1 class="text-3xl">Dashboard</h1>
        </div>
            </div>
</div>
    </app-layout>
</template>
<script>
import AppLayout from '@/Layouts/AppLayout'
export default {
    props:{
        appname:String,
        frameworks:Array
    },
    components:{
        AppLayout
    }
}
</script>