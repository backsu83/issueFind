<template>
    <div>
        <TopMenu/>
        <router-view></router-view>
        <Footer/>
    </div>
</template>

<script>
    import Footer from '../public/Footer';
    import TopMenu from '../public/TopMenu';

    export default {
        name: 'app',
        computed: {
            alert() {
                return this.$store.state.alert
            }
        },
        watch: {
            $route(to, from) {
                // clear alert on location change
                this.$store.dispatch('alert/clear');
            }
        },
        components: {
            TopMenu,
            Footer
        }
    };
</script>
