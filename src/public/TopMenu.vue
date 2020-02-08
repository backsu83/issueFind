<template>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
        <div class="container">
            <a class="navbar-brand js-scroll-trigger"><router-link to="/">Issue Find</router-link></a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive"  ref="dropdownMenu">
                <ul class="navbar-nav ml-auto my-2 my-lg-0" >
                    <li class="nav-item">
                        <a class="nav-link" @click="visible = !visible">서비스 개요</a>
                        <ul v-if="visible">
                            <li><router-link to="/intro">회사소개</router-link></li>
                            <li><router-link to="/service">서비스소개</router-link></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click="visible = !visible">서비스 신청</a>
                        <ul v-if="visible">
                            <li><router-link to="/service/pay">유료서비스</router-link></li>
                            <li><router-link to="/payment">결제하기</router-link></li>
                            <li><router-link to="/request/qna">상담신청</router-link></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click="visible = !visible">이용 가이드</a>
                        <ul v-if="visible">
                            <li><router-link to="/data/usage">데이터활용</router-link></li>
                            <li><router-link to="/share/profit">수익인증</router-link></li>
                            <li><router-link to="/qna">Q&A</router-link></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click="visible = !visible">이슈 파인더</a>
                        <ul v-if="visible">
                            <li><router-link to="/issue/hot">실시간이슈</router-link></li>
                            <li><router-link to="/issue/industry">업종별이슈</router-link></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click="visible = !visible">마이 페이지</a>
                        <ul v-if="visible">
                            <li><router-link to="/mypage">개인설정</router-link></li>
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

    .navbar-scrolled{
        box-shadow: 0 0.5rem 1rem rgba(0,0,0,.15);
        background-color: #fff !important;
    }
    .nav-item .nav-link{
        color: #212529 !important;
    }
    .navbar-brand{
        color: #212529 !important;
    }
</style>
