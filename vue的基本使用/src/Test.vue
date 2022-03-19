<template>
    <div id='app'>
        <p>{{username}}</p>
        <button @click="change">hhhhhh</button>
    </div>
</template>
<script>


export default{
    data(){
        return {
            username:'zsss'
        }
    },
    methods:{
        change(){
            this.username='www'
        }
    }
}

</script>
