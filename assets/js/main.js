const { createApp } = Vue


createApp({
    data() {
        return {
            emails: [],
        }
    },
    mounted() {
        
    },

    methods: {

        emailRandom() {
            this.emails = []

            for (let i = 0; i <= 9; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
                    console.log(result.data.response)
                    this.emails.push(result.data.response)
                })

            }
        }
    }

}).mount('#app')
