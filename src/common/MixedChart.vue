<template>
    <div class="text-center">
        <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
        <div class="bg-light container p-2 border">
            <div class="row">
                <div class="col-sm-4">
                    <p class="font-weight-bold">삼성전자</p>
                </div>
                <div class="col-sm-8">
                    <p class="small d-inline">이슈</p>&nbsp;
                    <p class="text-danger small d-inline">신제품 개발 / 유상증자 / 대외요인</p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4">
                    <p class="small">이슈점수</p>
                </div>
                <div class="col-sm-8">
                    <p class="small">이슈일로부터 주가 상승</p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4">
                    <h4 class="border">84</h4>
                </div>
                <div class="col-sm-4">
                    <h5>157,000</h5>
                </div>
                <div class="col-sm-4">
                    <h6 class="text-nowrap text-danger d-inline">▲53%</h6>
                    <p class="d-inline">[3일]</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts'

    export default {
        data() {
            return {
                series: [{
                    name: 'TEAM A',
                    type: 'column',
                    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
                }, {
                    name: 'TEAM B',
                    type: 'area',
                    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
                }, {
                    name: 'TEAM C',
                    type: 'line',
                    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
                }],
                chartOptions:
                    {
                        chart: {
                            height: 350,
                            type:
                                'line',
                            stacked:
                                false,
                        }
                        ,
                        stroke: {
                            width: [0, 2, 5],
                            curve:
                                'smooth'
                        }
                        ,
                        plotOptions: {
                            bar: {
                                columnWidth: '50%'
                            }
                        }
                        ,

                        fill: {
                            opacity: [0.85, 0.25, 1],
                            gradient:
                                {
                                    inverseColors: false,
                                    shade:
                                        'light',
                                    type:
                                        "vertical",
                                    opacityFrom:
                                        0.85,
                                    opacityTo:
                                        0.55,
                                    stops:
                                        [0, 100, 100, 100]
                                }
                        }
                        ,
                        labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
                            '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
                        ],
                        markers:
                            {
                                size: 0
                            }
                        ,
                        xaxis: {
                            type: 'datetime'
                        }
                        ,
                        yaxis: {
                            title: {
                                text: 'Points',
                            }
                            ,
                            min: 0
                        }
                        ,
                        tooltip: {
                            shared: true,
                            intersect:
                                false,
                            y:
                                {
                                    formatter: function (y) {
                                        if (typeof y !== "undefined") {
                                            return y.toFixed(0) + " points";
                                        }
                                        return y;

                                    }
                                }
                        }
                    }
            }
        },
        components: {
            apexchart: VueApexCharts
        }
    };
</script>

<style scoped>

</style>
