<!--
메인 페이지 - 업종별 이슈
-->
<template>
    <div class="container">
        <section class="page-item" id="services">
            <h2 class="text-primary mt-5 pb-3">Social Index</h2>
            <div class="row">
                <div class="col-lg-4">
                    <h5 class="text-justify mt-0 pb-3">지난주 업체별 급등 이슈</h5>
                </div>
                <div class="col-lg-4">
                    <h5 class="text-justify mt-0 pb-3">월별 업체별 급등 이슈와 주가</h5>
            </div>
                <div class="col-lg-4">
                </div>
                <div class="col-lg-4">
                    <table class="table table-striped small text-center table-hover">
                        <thead>
                        <tr>
                            <th scope="col">순위</th>
                            <th scope="col">업체명</th>
                            <th scope="col">산업</th>
                            <th scope="col">이슈점수</th>
                            <th scope="col">등락</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                        </tr><tr>
                            <th scope="row">4</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-lg-4">
                    <div>
                        <MixedChart/>
                    </div>
                    <div>
                        <MixedChart/>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div>
                        <MixedChart/>
                    </div>
                    <div>
                        <MixedChart/>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import MixedChart from "../../common/MixedChart";
    import TOSAgree from "../../login/SignUpAgree";

    export default {
        name: "IndustryIssue",
        components: {
            TOSAgree,
            MixedChart
        }
    };
</script>

<style scoped>

</style>