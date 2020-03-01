`<template>
    <div class="text-center">
        <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts'

    export default {
        data() {
            return {

                series: [{
                    name: 'Income',
                    type: 'column',
                    data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
                }
                , {
                    name: 'Cashflow',
                    type: 'column',
                    data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
                }, {
                    name: 'Revenue',
                    type: 'line',
                    data: [20, 29, 37, 36, 44, 45, 50, 58]
                }],
                chartOptions: {
                    colors : ['#B40404', '#08088A', '#DBA901'],
                    chart: {
                        height: 350,
                        type: 'line',
                        stacked: false
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        width: [1, 1, 4]
                    },
                    title: {
                        align: 'left',
                        offsetX: 110
                    },
                    xaxis: {
                        categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
                    },
                    yaxis: [
                        {
                            axisTicks: {
                                show: true,
                            },
                            axisBorder: {
                                show: true,
                                color: '#B40404'
                            },
                            labels: {
                                style: {
                                    color: '#B40404',
                                }
                            },
                            title: {
                                text: "Income (thousand crores)",
                                style: {
                                    color: '#B40404',
                                }
                            },
                            tooltip: {
                                enabled: true
                            }
                        },
                        {
                            seriesName: 'Income',
                            opposite: true,
                            axisTicks: {
                                show: true,
                            },
                            axisBorder: {
                                show: true,
                                color: '#08088A'
                            },
                            labels: {
                                style: {
                                    color: '#08088A',
                                }
                            },
                            title: {
                                text: "Operating Cashflow (thousand crores)",
                                style: {
                                    color: '#08088A',
                                }
                            },
                        },
                        {
                            seriesName: 'Revenue',
                            opposite: true,
                            axisTicks: {
                                show: true,
                            },
                            axisBorder: {
                                show: true,
                                color: '#DBA901'
                            },
                            labels: {
                                style: {
                                    color: '#DBA901',
                                },
                            },
                            title: {
                                text: "Revenue (thousand crores)",
                                style: {
                                    color: '#DBA901',
                                }
                            }
                        },
                    ],
                    tooltip: {
                        fixed: {
                            enabled: true,
                            position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
                            offsetY: 30,
                            offsetX: 60
                        },
                    },
                    legend: {
                        horizontalAlign: 'left',
                        offsetX: 40
                    }
                },

            }

        },
        components: {
            apexchart: VueApexCharts
        }
    };
</script>

<style scoped>

</style>
