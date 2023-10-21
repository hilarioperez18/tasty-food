<template lang="">
    <div id="test">
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            result: [],
        }
    },
    beforeMount() {
        this.result = localStorage.getItem("result");
        console.log(JSON.parse(this.result));
    }
}
</script>
<style>
#test {
    background-color: brown;
    height: 100px;
    width: 100px;
}
</style>