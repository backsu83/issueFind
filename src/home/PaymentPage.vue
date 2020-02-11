`<template>
    <section class="page-section">

        <section class="bg-dark text-white mt-5" id="about">
            <div class="row justify-content-center p-5">
                <div class="col-lg-8 text-center font-weight-bold">
                    <h2>이슈파인드 <h1 class="d-inline font-weight-bold" style="color: orange">프리미엄</h1> 회원</h2>
                    <h1>서비스 런칭 기념 특가</h1>
                    <h3 class="mt-5" style="color: yellow"><strike>1년 3,600,000원</strike></h3>
                    <h1 class="font-weight-bold" style="color: yellow">1년 1,440,000원</h1>
                </div>
            </div>
        </section>

        <div class="container text-center">
            <h1 class="mt-5 font-weight-bold color-red">매일 3,950원으로 최대 수익률을 기록하라!</h1>
            <p class="text-dark">(1년 상품 할인가 기준)</p>
            <table class="table table-bordered text-center mt-5 font-weight-bold bg-light">
                <thead>
                <tr>
                    <th scope="col">기간</th>
                    <th scope="col">실버-1개</th>
                    <th scope="col">골드-6개</th>
                    <th scope="col">프리미엄-1년</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">
                        정상가
                        <hr class="-divide">
                        할인율
                    </th>
                    <td>300,000
                        <hr class="-divide">
                        -
                    </td>
                    <td>1,800,000
                        <hr class="-divide">
                        -
                    </td>
                    <td>3,600,000
                        <hr class="-divide">
                        -
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        얼리버드 특가
                        <hr class="-divide">
                        할인율
                    </th>
                    <td>240,000
                        <hr class="-divide">
                        <p class="color-red m-0">-20%</p>
                    </td>
                    <td>1,440,000
                        <hr class="-divide">
                        <p class="color-red m-0">-20%</p>
                    </td>

                    <td>2,880,000
                        <hr class="-divide">
                        <p class="color-red m-0">-20%</p>
                    </td>
                </tr>
                <tr>
                    <th scope="row">기간할인 적용가
                        <hr class="-divide">
                        할인율
                    </th>
                    <td>300,000
                        <hr class="-divide">
                        -
                    </td>
                    <td>1,170,000
                        <hr class="-divide">
                        <p class="color-red m-0">-35%</p>
                    </td>
                    <td>1,800,000
                        <hr class="-divide">
                        <p class="color-red m-0">-50%</p>
                    </td>
                </tr>
                <tr bgcolor="#fff8dc">
                    <th scope="row"><h5 class="font-weight-bold color-navy">얼리버드 X 기간할인 최종 할인가</h5>
                        <hr class="-divide">
                        <h5 class="font-weight-bold color-navy">최종 할인율</h5>
                    </th>
                    <td>
                        <h5 class="font-weight-bold">240,000원</h5>
                        <hr class="-divide">
                        <h5 class="color-red m-0">-20%</h5>
                    </td>
                    <td>
                        <h5 class="font-weight-bold">936,000원</h5>
                        <hr class="-divide">
                        <h5 class="color-red m-0">-48%</h5>
                    </td>
                    <td>
                        <h5 class="font-weight-bold">1,440,000원</h5>
                        <hr class="-divide">
                        <h5 class="color-red m-0">-60%</h5>
                    </td>
                </tr>
                </tbody>
            </table>
            <div class="text-center mt-5">
                <a class="btn btn-primary btn-lg js-scroll-trigger col-md-4" href="#about">결제하기</a>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "PaymentPage"
    }
</script>

<style scoped>
    .color-red {
        color: #DF0101;
    }

    .color-navy {
        color: #0B3861;
    }
</style>