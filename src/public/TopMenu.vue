<template>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
        <div class="container">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">Issue Find</a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive"  ref="dropdownMenu">
                <ul class="navbar-nav ml-auto my-2 my-lg-0" >
                    <li class="nav-item">
                        <a class="nav-link" @click="visible = !visible">서비스 개요</a>
                        <ul v-if="visible">
                            <li>회사소개</li>
                            <li>서비스소개</li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click="visible = !visible">서비스 신청</a>
                        <ul v-if="visible">
                            <li>유료서비스</li>
                            <li>결제하기</li>
                            <li>상담신청</li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click="visible = !visible">이용 가이드</a>
                        <ul v-if="visible">
                            <li>유료서비스</li>
                            <li>결제하기</li>
                            <li>상담신청</li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click="visible = !visible">이슈 파인더</a>
                        <ul v-if="visible">
                            <li>핫이슈등록</li>
                            <li>산업별이슈</li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click="visible = !visible">마이 페이지</a>
                        <ul v-if="visible">
                            <li>개인설정</li>
                            <li>개인정보변경</li>
                            <li><router-link to="/login">로그아웃</router-link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
    export default {
        name: "TopMenu",
        props: ['position', 'align'],
        data(){
            return{
                visible:false
            }
        },
        methods:{
            documentClick(e){
                let el = this.$refs.dropdownMenu;
                let target = e.target;
                if ((el !== target) && !el.contains(target)){
                    this.visible = false;
                }
            },
            created(){
                document.addEventListener('click', this.documentClick);
            },
            destroyed(){
                document.removeEventListener('click', this.documentClick);
            }
        }
    }
</script>

<style scoped>
    ul {
        list-style: none;
        align-content: center;
    }

    a {
        cursor: pointer;
    }
</style>
