<template>
    <div>
    <!-- Masthead -->
    <header class="masthead">
        <div class="container h-100">
            <div class="row h-100 align-items-center justify-content-center text-center">
                <div class="col-lg-10 align-self-end">
                    <h1 class="text-uppercase text-white font-weight-bold">국내 2,300여 상장기업의 <br>핵심정보를 내 손안에!</h1>
                    <hr class="divider my-4">
                </div>
                <div class="col-lg-8 align-self-baseline">
                    <p class="text-white-75 font-weight-light mb-5">빅데이터 이슈 분석리포트로 기업의 현재/미래 가치를 확인하세요 <br>
                        투자의 핵심 지표가 되는 이슈를 가장 빠르고 간단하게 전달합니다 <br>
                        기업 이슈와 가치에 대한 분석, 이제 [이슈파인드]를 만나보세요
                    </p>
                </div>
            </div>
        </div>
    </header>

    <!-- About Section -->
    <section class="page-section bg-primary" id="about">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 text-center">
                    <h2 class="text-white mt-0">업종별 이슈 현황판
                        (무료정보) </h2>
                    <hr class="divider light my-4">
                    <p class="text-white-50 mb-4">세로 550px이상</p>
                </div>
            </div>
        </div>
    </section>


    <!-- Services Section -->
    <section class="page-section" id="services">
        <div class="container">
            <h2 class="text-center mt-0">업종별 이슈 현황판
                (무료정보)</h2>
        </div>
    </section>

    <!-- Call to Action Section -->
    <section class="page-section bg-dark text-white">
        <div class="container text-center">
            <h2 class="text-center mt-0">업종별 이슈 현황판
                (무료정보)</h2>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="page-section" id="contact">
        <div class="container">
            <div class="row justify-content-center">
                <table>
                    <tr>
                        <td>
                            <div class="col-lg-12 text-center">
                                <h2 class="mt-0">상담예약</h2>
                                <hr class="divider my-4">
                                <p class="text-muted mb-5">유료서비스에 대해 궁금하신 분들은 상담 예약을 신청해주세요</p>
                                <input type="text" class="form-control" placeholder="이름을 입력하세요" style="margin-bottom: 10px"/>
                                <input type="text" class="form-control" placeholder="전화번호를 숫자만 입력하세요" style="margin-bottom: 10px"/>
                                <table>
                                    <td>
                                        <input type="text" class="form-control" placeholder="인증번호 입력"/>
                                    </td>
                                    <td style="padding-left: 10px">
                                        <a class="btn btn-dark btn-group-sm" href="#about">인증번호 받기</a>
                                    </td>
                                </table>
                                <div style="margin-top: 15px">
                                    <input type="checkbox" name="chk_info" value="agreePrivate">개인정보 제공 및 이용동의
                                    <a class="js-scroll-trigger" href="#about" style="padding-left: 20px">자세히 보기</a>
                                </div>
                                <a class="btn btn-primary btn-lg js-scroll-trigger col-lg-12 " href="#about" style="margin-top: 20px">문의하기</a>
                            </div>
                        </td>
                        <td style="padding-left: 150px">
                            <div class="row justify-content-center">
                                <div class="col-lg-12 text-center">
                                    <h2 class="mt-0">하루 한잔의 커피값이면</h2>
                                    <h4 class="text-muted mb-5">국내 2,300여개의 기업정보를 한눈에!</h4>
                                    <h2 class="mt-1">1DAY – 4,600원</h2>
                                    <p class="text-muted mb-5">(1년 이용 시 할인가)</p>
                                    <a class="btn btn-primary btn-lg js-scroll-trigger col-lg-12 text-center" href="#about" style="margin-top: 10px">유료 서비스 기능 소개</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </section>
    </div>
</template>

<script>
    export default {
        name: "Intro"
    }
</script>

<style scoped>

</style>