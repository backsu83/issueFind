`<template>
    <div class="container">
        <section class="page-item" id="services">
            <h3 class="mt-5 pb-3">실시간 이슈 – 종목분석</h3>
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <ChartHeader/>
                </div>
                <div class="col-lg-6">
                    <div class="row mb-2">
                        <button class="btn btn-dark js-scroll-trigger col-sm-2 m-1">기업뉴스
                        </button>
                        <button class="btn btn-dark js-scroll-trigger col-sm-2 m-1">기업공시
                        </button>
                        <button class="btn btn-dark js-scroll-trigger col-sm-2 m-1">이슈분석
                        </button>
                    </div>
                    <div class="row m-1">
                        <button class="btn btn-dark js-scroll-trigger col-lg-6">관심업종 등록하기
                        </button>
                    </div>
                </div>
                <div class="col-lg-10 text-center">
                    <LineChart/>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import MixedChart from "../common/MixedChart";
    import ChartHeader from "../common/ChartHeader";
    import YAxisChart from "../common/YAxisChart";
    import LineChart from "../common/LineChart";

    export default {
        name: 'RealTimeIssuePage',
        components: {
            MixedChart,
            YAxisChart,
            LineChart,
            ChartHeader
        }
    };
</script>

<style scoped>

</style>
`