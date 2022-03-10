const app=Vue.createApp({
    data(){
        return{
            firstName:'snigdha',
            lastName:'Bommareddy',
            email:'snigdhabommareddy@gmail.com',
            contact:'9912388839',
            gender:'female',
            picture:'images/IMG_1356.JPG'
        }
    },
    methods:{
       async getUser(){
            const res=await fetch('https://randomuser.me/api')
            const {results}=await res.json()
            
            this.firstName=results[0].name.first,
            this.lastName=results[0].name.last,
            this.email=results[0].email,
            this.gender=results[0].gender,
            this.picture=results[0].picture.large
        }
    }
})
app.mount('#app');