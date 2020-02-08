<!--
메인 페이지 - 업종별 이슈
-->
<template>
    <div class="container">
        <section class="page-item" id="services">
            <h2 class="text-primary mt-5 pb-3">Social Index</h2>
            <div class="row">
                <div class="col-md-4">
                    <h5 class="text-justify mt-0 pb-3">지난주 업체별 급등 이슈</h5>
                    <table class="table text-center">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-md-4">
                    <div>
                        <MixedChart/>
                    </div>
                    <div>
                        <MixedChart/>
                    </div>
                </div>
                <div class="col-md-4">
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