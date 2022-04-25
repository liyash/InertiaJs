<template>
<Link :class="{'font-bold underline':active}" class="text-blue-500 hover:underline" :href="linkRef">
    <slot />
</Link>

</template>
<script>

export default {
    props:{
        active:Boolean,
        linkRef:String
    }
}
</script>