<template>
    <div class="row justify-content-center">
        <section class="page-section">
            <h1 class="mt-0 text-center">BI</h1>
            <hr class="divider my-4">
            <form @submit.prevent="handleSubmit">
                <div class="form-group mt-3">
                    <input type="text" placeholder="아이디" v-model="username" name="username" class="form-control"
                           :class="{ 'is-invalid': submitted && !username }"/>
                    <div v-show="submitted && !username" class="invalid-feedback">계정 정보를 입력해 주세요</div>
                </div>
                <div class="form-group">
                    <input type="password" placeholder="패스워드" v-model="password" name="password" class="form-control"
                           :class="{ 'is-invalid': submitted && !password }"/>
                    <div v-show="submitted && !password" class="invalid-feedback">패스워드를 입력해 주세요</div>
                </div>
                <input type="checkbox" name="chk_info" value="agreePrivate">&nbsp;&nbsp;&nbsp;로그인 상태 유지
                <hr class="dropdown-divider mt-3">
                <div class="mt-3">
                    <router-link to="/signup">아이디 찾기</router-link>
                    <router-link to="/signup" class="pl-4">비밀번호 찾기</router-link>
                    <router-link to="/signup" class="pl-4">회원가입</router-link>
                </div>
                <div class="form-group mt-4">
                    <button class="btn btn-primary btn-lg js-scroll-trigger col-lg-12 " :disabled="loggingIn">로그인
                    </button>
                    <img v-show="loggingIn"
                         src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="/>
                </div>
            </form>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                username: '',
                password: '',
                submitted: false
            }
        },
        computed: {
            loggingIn() {
                return this.$store.state.authentication.status.loggingIn;
            }
        },
        created() {
            // reset login status
            this.$store.dispatch('authentication/logout');
        },
        methods: {
            handleSubmit(e) {
                this.submitted = true;
                const {username, password} = this;
                const {dispatch} = this.$store;
                if (username && password) {
                    dispatch('authentication/login', {username, password});
                }
            }
        }
    };
</script>
