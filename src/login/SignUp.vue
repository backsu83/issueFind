<template>
    <div>
    <!-- Contact Section -->
    <section class="page-section" id="contact">
        <div class="container">
            <div class="row justify-content-center">
                            <div class="col-lg-7 text-center">
                                <h2 class="mt-0">회원가입</h2>
                                <hr class="divider my-4">
                                <p class="text-muted mb-5">유료서비스에 대해 궁금하신 분들은 상담 예약을 신청해주세요</p>
                                <table>
                                    <td>
                                        <input type="text" class="form-control mt-3" placeholder="아이디를 입력하세요">
                                    </td>
                                    <td class="pl-3">
                                        <a class="btn btn-dark btn-group-sm" href="#about">아이디 중복확인</a>
                                    </td>
                                </table>
                                <input type="password" class="form-control mt-3" placeholder="비밀번호를 입력하세요"/>
                                <table>
                                    <td>
                                        <input type="password" class="form-control mt-3" placeholder="비밀번호를 한번 더 입력하세요"/>
                                    </td>
                                    <td class="pl-3">
                                        <a class="btn btn-dark btn-group-sm" href="#about">비밀번호 확인</a>
                                    </td>
                                </table>
                                <input type="text" class="form-control mt-3" placeholder="이름"/>
                                <input type="number" class="form-control mt-3" placeholder="생년월일"/>
                                <p class="text-muted text-left">Ex) 1982년 3월 1일 생의 경우 : ‘19820301’ 입력</p>
                                <input type="text" class="form-control mt-3" placeholder="성별"/>
                                <input type="number" class="form-control mt-3" placeholder="전화번호를 숫자만 입력하세요"/>
                                <table class="mt-3">
                                    <td>
                                        <input type="text" class="form-control" placeholder="인증번호 입력"/>
                                    </td>
                                    <td class="pl-3">
                                        <a class="btn btn-dark btn-group-sm" href="#about">인증번호 받기</a>
                                    </td>
                                </table>
                                <a class="btn btn-primary btn-lg js-scroll-trigger col-lg-12 mt-5" href="#about"
                                   style="margin-top: 20px">가입하기</a>
                            </div>

            </div>
        </div>
    </section>
</div>
</template>

<script>
    export default {
        name: "SignUp"
    }
</script>

<style scoped>

</style>
