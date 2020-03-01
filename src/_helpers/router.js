import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/main/HomePage'
import Login from '../login/Login'
import IntroPage from "../home/IntroPage";
import ServicePage from "../home/ServicePage";
import PayServicePage from "../home/PayServicePage";
import PaymentPage from "../home/PaymentPage";
import RequestQnaPage from "../home/RequestQnaPage";
import RealTimeIssuePage from "../home/RealTimeIssuePage";
import SignUp from "../login/SignUp";
import DataUsagePage from "../home/DataUsagePage";
import ShareProfitPage from "../home/ShareProfitPage";
import QnaPage from "../home/QnaPage";
import SignUpAgree from "../login/SignUpAgree";
import HotIssuePage from "../home/HotIssuePage";
import IndustryIssuePage from "../home/IndustryIssuePage";
import MyPage from "../login/MyPage";

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '/login', component: Login },
    { path: '/signup/agree', component: SignUpAgree }, //이용약관동의
    { path: '/signup', component: SignUp }, //회원가입
    { path: '/auth/mypage', component: MyPage }, //개인정보설정
    { path: '/intro', component: IntroPage }, //회사소개
    { path: '/service', component: ServicePage }, //서비스소개
    { path: '/service/pay', component: PayServicePage }, //유료서비스소개
    { path: '/payment', component: PaymentPage }, //결제하기
    { path: '/request/qna', component: RequestQnaPage }, //상담신청
    { path: '/data/usage', component: DataUsagePage }, //데이터활용
    { path: '/share/profit', component: ShareProfitPage }, //수익인증
    { path: '/qna', component: QnaPage }, //Q&A
    { path: '/request/qna', component: RequestQnaPage }, //상담신청
    { path: '/auth/issue/realtime/', component: RealTimeIssuePage }, //실시간이슈-유료
    { path: '/issue/hot', component: HotIssuePage }, //핫이슈등록
    { path: '/issue/industry', component: IndustryIssuePage }, //산업별이슈

    // otherwise redirect to home
    { path: '*', redirect: '/' , component: HomePage}
  ]
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/auth'];
  const authRequired = to.path.includes(publicPages);
  const loggedIn = localStorage.getItem('user');
  console.log('logginIn:'+loggedIn);
  // if (authRequired && !loggedIn) {
  //   return next('/login');
  // }

  next();
});
