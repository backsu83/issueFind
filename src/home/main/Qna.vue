<template>
    <div>
        <!-- About Section -->
        <section class="text-white mt-5" id="about">
            <div class="container">
                <div class="row justify-content-center">
                        <h4 class="mt-0 color-red font-weight-light">※ 유료 서비스팩 이용 시 최신 정보 및 추이 그래프를 받아 보실 수 있습니다. </h4>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section class="page-section" id="contact">
            <div class="container">
                <div class="row text-center">
                    <div class="col-md-6">
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
                        <div class="m-2">
                            <input type="checkbox" name="chk_info" value="agreePrivate">개인정보 제공 및 이용동의
                            <a class="js-scroll-trigger" href="#about" style="padding-left: 20px">자세히
                                보기</a>
                        </div>
                        <a class="btn btn-primary btn-lg js-scroll-trigger m-2" href="#about">문의하기</a>
                    </div>
                    <div class="col-md-6 bg-light">
                        <h2 class="mt-5">하루 한잔의 커피값이면</h2>
                        <h4 class="text-muted mb-5">국내 2,300여개의 기업정보를 한눈에!</h4>
                        <h2 class="mt-1 text-danger font-weight-bold">1DAY – 4,600원</h2>
                        <p class="mb-5">(1년 이용 시 할인가)</p>
                        <a class="btn btn-primary btn-lg js-scroll-trigger text-center m-4"
                           href="#about">유료 서비스 기능 소개</a>
                    </div>
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
    .bg-color-red {
        background: #DF0101;
    }
    .color-red {
        color: #DF0101;
    }
</style>