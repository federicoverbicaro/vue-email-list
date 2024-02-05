const { createApp } = Vue


createApp({
    data() {
        return {
            email: 0,
           

        }
    },
    mounted(){
        
    },

    methods: {
        
        emailRandom() {

            for (let i = 0; i = 10; i++) 
            {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
                     console.log(result.data.response)
                    this.email = result.data.response
                })
                
            }
        }
    }

}).mount('#app')
