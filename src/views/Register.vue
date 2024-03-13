<template>
    <div class="auth-pdage">
        <div class="container page">
            <div class="row">
                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center">Sign Up</h1> 
                    <p class="text-xs-center">
                        <!-- <router-link :to="{name: 'login'}">Need an account?</router-link> -->
                    </p>   
                    <mcv-validation-errors:
                        v-if="validationErrors"
                        validation-errors = "validationErrors"
                    />
                    <form @submit.prevent="onSubmit">
                        <fieldset class="form-group">
                            <input 
                                type="text"
                                class="form-control from-control-lg"
                                placeholder="Username"
                                v-model="username"
                            />
                        </fieldset>  
                        
                        <fieldset class="form-group">
                            <input 
                                type="text"
                                class="form-control from-control-lg"
                                placeholder="Email"
                                v-model="email"
                            />
                        </fieldset>  

                        <fieldset class="form-group">
                            <input 
                                type="password"
                                class="form-control from-control-lg"
                                placeholder="Password"
                                v-model="password"
                            />
                        </fieldset>  
                        <button 
                            class="btn btn-lg btn-primary pull-xs-right"
                            v-bind:disabled="isSubmitting"
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//mport McvValidationErrors from '@/components/ValidationErrors.vue'

export default {
    name: 'McvRegister',
    components: {
        /*McvValidationErrors*/
    },
    data(){
        return {
            email: '',
            password: '',
            username: ''
        }
    },
    computed: {
        isSubmitting() {
            return this.$store.state.auth.isSubmitting
        }, 
        validationErrors() {
            return this.$store.$state.auth.validationErrors
        }
    },
    methods: {
        onSubmit() {
            console.log('submite form')
            this.$store.dispatch('register', {
                email: this.email,
                username: this.username,
                password: this.password
            }).then(user => {
                console.log('successfully register user', user)
                this.$router.push({name: 'home'})
            })
        },       
    }
}
</script>

<style>

</style>