<template>
    <header class="header">
        <back-ward></back-ward>
        <h1>{{ title }}</h1>
    </header>
</template>

<script>
import BackWard from './Sub/BackWard.vue';
export default {
  components: { BackWard },
    name: 'CommonHeader',
    props: {
        title: {
            type: String,
            default: () => {
                return '一线生活通'
            }
        }
    },
    data(){
        return {
            
        }
    }
}
</script>

<style lang="scss" scoped>
    @import 'styles/mixins.scss';
    @import 'styles/veriables.scss';
    .header{
        position: relative;
        @include flex-row;
        @include vh-center;
        height: $headerHeight;
        background-color: $defaultBgColor;
        h1{
            font-size: .18rem;
        }
    }
</style>