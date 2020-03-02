<template>
    <div>
        <div id="chart">
            <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
        </div>
    </div>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts'
    import {chartService} from '../_services/chart.service';

    export default {
        data() {
            return {
                series: [{
                    name: '종가',
                    type: 'line',
                    data: [4170, 4170, 4170, 4170, 4170, 4170, 4170]
                },
                    {
                        name: '거래금액',
                        type: 'line',
                        data: [0, 0, 0, 0, 0, 0, 0]
                    },
                    {
                        name: '공감',
                        type: 'line',
                        data: [15, 0, 0, 0, 2, 6, 0]
                    },
                    {
                        name: '비공감',
                        type: 'line',
                        data: [1, 0, 0, 3, 6, 2, 0]
                    },
                    {
                        name: '게시글 스코어',
                        type: 'line',
                        data: [2245, 0, 0, 1512, 1680, 612, 0]
                    },
                    {
                        name: '게시글 뷰',
                        type: 'line',
                        data: [2085, 0, 0, 1452, 1600, 532, 0]
                    }],
                chartOptions: {
                    colors: ['#B40404', '#DF7401', '#0174DF', '#585858', '#0B6121', '#380B61'],
                    chart: {
                        height: ['100%', 100],
                        type: 'line',
                    },
                    stroke: {
                        width: [2, 2, 2, 2, 2, 2, 2]
                    },
                    title: {
                        text: '회사코드'
                    },
                    dataLabels: {
                        enabled: true,
                        enabledOnSeries: []
                    },
                    labels: ['2020-02-20', '2020-02-21', '2020-02-22', '2020-02-23', '2020-02-24', '2020-02-25', '2020-02-26'],
                    xaxis: {
                        type: 'text'
                    },
                    yaxis: [{
                        title: {
                            text: '종가',
                        },
                        showAlways: true,
                        logarithmic: false
                    },
                        {
                            opposite: true,
                            title: {}
                        }
                    ]
                },
            }
        },
        components: {
            apexchart: VueApexCharts
        },
        created() {
            // 뷰가 생성되고 데이터가 이미 감시 되고 있을 때 데이터를 가져온다.
            this.chartData()
        },
        watch: {
            // 라우트가 변경되면 메소드를 다시 호출됩니다.
            '$route': 'chartData'
        },
        methods: {
            chartData() {
                console.log('chartData==!!');
              console.log(chartService.getChartInfo());
            }
        }
    };
</script>

<style scoped>

</style>
