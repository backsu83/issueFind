<template>
    <div>
        <!-- About Section -->
        <section class="bg-primary text-white mt-5" id="about">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 text-center">
                        <hr class="divider text-primary my-4">
                        <h1 class="text-white mt-0">유료 서비스팩 이용 시 </h1>
                        <h2 class="text-white mt-0">최신 정보 및 추이 그래프를 받아 보실 수 있습니다. </h2>
                        <hr class="divider text-primary my-4">
                    </div>
                </div>
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
                                    <input type="text" class="form-control" placeholder="이름을 입력하세요"
                                           style="margin-bottom: 10px"/>
                                    <input type="text" class="form-control" placeholder="전화번호를 숫자만 입력하세요"
                                           style="margin-bottom: 10px"/>
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
                                        <a class="js-scroll-trigger" href="#about" style="padding-left: 20px">자세히
                                            보기</a>
                                    </div>
                                    <a class="btn btn-primary btn-lg js-scroll-trigger col-lg-12 " href="#about"
                                       style="margin-top: 20px">문의하기</a>
                                </div>
                            </td>
                            <td style="padding-left: 150px">
                                <div class="row justify-content-center">
                                    <div class="col-lg-12 text-center">
                                        <h2 class="mt-0">하루 한잔의 커피값이면</h2>
                                        <h4 class="text-muted mb-5">국내 2,300여개의 기업정보를 한눈에!</h4>
                                        <h2 class="mt-1">1DAY – 4,600원</h2>
                                        <p class="text-muted mb-5">(1년 이용 시 할인가)</p>
                                        <a class="btn btn-primary btn-lg js-scroll-trigger col-lg-12 text-center"
                                           href="#about" style="margin-top: 10px">유료 서비스 기능 소개</a>
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
        name: "Qna"
    }
</script>

<style scoped>

</style>