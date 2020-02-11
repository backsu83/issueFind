`<template>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
        <div class="container">
            <a class="navbar-brand js-scroll-trigger">
                <router-link to="/">Issue Find</router-link>
            </a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                    data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse dropdown show" id="navbarResponsive" ref="dropdownMenu">
                <div class="navbar-nav ml-auto my-2 my-lg-0">
                    <li class="nav-item">
                        <div class="dropdown show">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                               id="introServiceMenuLink" aria-haspopup="true" aria-expanded="false">서비스 개요</a>
                            <div class="dropdown-menu" aria-labelledby="introServiceMenuLink">
                                <a class="dropdown-item">
                                    <router-link to="/intro">회사소개</router-link>
                                </a>
                                <a class="dropdown-item">
                                    <router-link to="/service">서비스소개</router-link>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item">
                        <div class="dropdown show">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                               id="serviceReqMenuLink" aria-haspopup="true" aria-expanded="false">서비스 신청</a>
                            <div class="dropdown-menu" aria-labelledby="serviceReqMenuLink">
                                <a class="dropdown-item">
                                    <router-link to="/service/pay">유료서비스</router-link>
                                </a>
                                <a class="dropdown-item">
                                    <router-link to="/payment">결제하기</router-link>
                                </a>
                                <a class="dropdown-item">
                                    <router-link to="/request/qna">상담신청</router-link>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item">
                        <div class="dropdown show">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                               id="serviceGuideMenuLink" aria-haspopup="true" aria-expanded="false">이용 가이드</a>
                            <div class="dropdown-menu" aria-labelledby="serviceGuideMenuLink">
                                <a class="dropdown-item">
                                    <router-link to="/data/usage">데이터활용</router-link>
                                </a>
                                <a class="dropdown-item">
                                    <router-link to="/share/profit">수익인증</router-link>
                                </a>
                                <a class="dropdown-item">
                                    <router-link to="/qna">Q&A</router-link>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item">
                        <div class="dropdown show">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                               id="issueMenuLink" aria-haspopup="true" aria-expanded="false">이슈 파인더</a>
                            <div class="dropdown-menu" aria-labelledby="issueMenuLink">
                                <a class="dropdown-item">
                                    <router-link to="/issue/hot">실시간이슈</router-link>
                                </a>
                                <a class="dropdown-item">
                                    <router-link to="/issue/industry">업종별이슈</router-link>
                                </a>
                            </div>
                        </div>
                    <li class="nav-item">
                        <div class="dropdown show">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                               id="myMenuLink" aria-haspopup="true" aria-expanded="false">마이 페이지</a>
                            <div class="dropdown-menu" aria-labelledby="myMenuLink">
                                <a class="dropdown-item">
                                    <router-link to="/mypage">개인설정</router-link>
                                </a>
                                <a class="dropdown-item">
                                    <router-link to="/login">로그아웃</router-link>
                                </a>
                            </div>
                        </div>
                </li>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
    export default {
        name: "TopMenu",
        props: ['position', 'align']
    }
</script>

<style scoped>
    a {
        cursor: pointer;
    }

    .nav-item .nav-link {
        color: #212529 !important;
    }

    .navbar-brand {
        color: #212529 !important;
    }
</style>
`