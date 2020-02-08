<template>
    <div>
        <!-- 상단 슬라이드 이미지 -->
        <TopSlide/>
        <!-- 산업별 이슈 -->
        <IndustryIssue/>
        <!-- 상담 예약 -->
        <Qna/>
    </div>
</template>

<script>
    import TopSlide from "./TopSlide";
    import IndustryIssue from "./IndustryIssue";
    import Qna from "./Qna";

    export default {
        name: 'Home',
        components: {
            TopSlide,
            IndustryIssue,
            Qna
        }
    };

</script>
