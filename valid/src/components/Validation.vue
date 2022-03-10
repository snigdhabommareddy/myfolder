<template>
  <div class="container">
    <div class="row">
        <div class="col-md-8">
          <h1>Personal Details</h1>
          <p class="mt-4">Please provide your personal details below.</p>
          <form @submit.prevent="submit">
                <div class="mb-3 mt-5">
                    <label for="exampleInputEmail1" class="form-label">Email address<span class="color">*</span></label>
                    <input type="email" v-model.trim="$v.email.$model" :class="{'is-invalid':$v.email.$error,'is-valid':!$v.email.$invalid}" class="form-control" id="exampleInputEmail1" placeholder="name@example.com" aria-describedby="emailHelp"/>
                    <div v-if="!$v.email.required" class="invalid-feedback">Your Email is required!</div>
                    <div v-if="!$v.email.email" class="invalid-feedback">Your Email is not valid!</div>
                    <div class="valid-feedback"> Looks good!</div>
                </div>
                <div class="form-group mt-5">
                  <label>Saluation<span class="color">*</span></label>
                    <div class="d-flex flex-column flex-md-row">
                      <div class="form-check mt-3">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" v-model.trim="$v.saluation.$model" :class="{'is-invalid':$v.saluation.$error,'is-valid':!$v.saluation.$invalid}"/>
                        <span class="radio-control"></span>
                        <label class="form-check-label" for="exampleRadios1">Mr.</label>
                      </div>
                      <div class="form-check mt-3">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" v-model.trim="$v.saluation.$model" :class="{'is-invalid':$v.saluation.$error,'is-valid':!$v.saluation.$invalid}"/>
                        <span class="radio-control"></span>
                        <label class="form-check-label" for="exampleRadios2">Miss</label>
                      </div>
                      <div class="form-check mt-3">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" v-model.trim="$v.saluation.$model" :class="{'is-invalid':$v.saluation.$error,'is-valid':!$v.saluation.$invalid}"/>
                        <span class="radio-control"></span>
                        <label class="form-check-label" for="exampleRadios3">Mrs.</label>
                      </div>
                      
                    </div>
                      <div class="mb-3 mt-3">
                            <label for="exampleInputfirstname" class="form-label">First Name<span class="color">*</span></label>
                            <input type="text" v-model.trim="$v.firstname.$model" :class="{'is-invalid':$v.firstname.$error,'is-valid':!$v.firstname.$invalid}" class="form-control" id="exampleInputfirstname" placeholder="Enter First Name" aria-describedby="firstnameHelp"/>
                            <div v-if="!$v.firstname.required" class="invalid-feedback">Your First Name is required!</div>
                            <div class="valid-feedback"> Looks good!</div>
                       </div>
                      <div class="mb-3 mt-3">
                            <label for="exampleInputsurname" class="form-label">Surname<span class="color">*</span></label>
                            <input type="text"  v-model.trim="$v.surname.$model" :class="{'is-invalid':$v.surname.$error,'is-valid':!$v.surname.$invalid}" class="form-control" id="exampleInputsurname" placeholder="Enter Surname" aria-describedby="surnameHelp"/>
                            <div v-if="!$v.surname.required" class="invalid-feedback">Your Sur Name is required!</div>
                            <div class="valid-feedback"> Looks good!</div>                      
                       </div>
                      <div class="row">
                            <div class="col-md-4">
                                <label for="inputpostcode">Postcode<span class="color">*</span></label>
                                <input type="number" class="form-control mt-2" aria-label="postcode" v-model.trim="$v.postcode.$model" :class="{'is-invalid':$v.postcode.$error,'is-valid':!$v.postcode.$invalid}"/>
                                <div v-if="!$v.postcode.required" class="invalid-feedback">Your Postcode is required!</div>
                                <div v-if="!$v.postcode.maxLength" class="invalid-feedback">your Postcode must contains at most {{$v.postcode.$params.maxLength.max}} numbers.</div>
                                <div class="valid-feedback"> Looks good!</div> 
                            </div>
                            <div class="col-md-8">
                            <label for="inputcity">City<span class="color">*</span></label>
                             <input type="text" v-model.trim="$v.city.$model" :class="{'is-invalid':$v.city.$error,'is-valid':!$v.city.$invalid}" class="form-control mt-2" placeholder="city" aria-label="city">
                            <div v-if="!$v.city.required" class="invalid-feedback">Your City is required!</div>
                            <div class="valid-feedback"> Looks good!</div> 
                            </div>
                        </div>
                      <div class="row mt-3">
                            <div class="col-md-8">
                                <label for="inputstreet">Street<span class="color">*</span></label>
                                <input type="text" v-model.trim="$v.street.$model" :class="{'is-invalid':$v.street.$error,'is-valid':!$v.street.$invalid}" class="form-control mt-2" placeholder="Enter Street" aria-label="street">
                                <div v-if="!$v.street.required" class="invalid-feedback">Your City is required!</div>
                                <div class="valid-feedback"> Looks good!</div> 
                            </div>
                            <div class="col-md-4">
                            <label for="inputhouse">House Number<span class="color">*</span></label>
                             <input type="number" v-model.trim="$v.housenumber.$model" :class="{'is-invalid':$v.housenumber.$error,'is-valid':!$v.housenumber.$invalid}" class="form-control mt-2" aria-label="housenumber">
                              <div v-if="!$v.housenumber.required" class="invalid-feedback">Your City is required!</div>
                              <div class="valid-feedback"> Looks good!</div>
                            </div>
                        </div>
                        <div class="mb-3 mt-3">
                            <label for="exampleInputaddress" class="form-label">Additional Address</label>
                            <input type="text" class="form-control" id="exampleInputaddress" placeholder="Enter Address" aria-describedby="addressHelp" v-model.trim="additional"/>
                        </div>
                      <div class="form-group mt-5">
                        <label for="exampleInputdob">Date Of Birth<span class="color">*</span></label>
                        <div class="d-flex justify-content-between">
                            <select class="form-select w-25 mt-3" aria-label="Default select example" v-model.trim="$v.day.$model" :class="{'is-invalid':$v.day.$error,'is-valid':!$v.day.$invalid}">
                              <div v-if="!$v.day.required" class="invalid-feedback">Day is required!</div>
                              <div class="valid-feedback"> Looks good!</div>
                                <option selected>Day</option>
                                <option value="1"> 1</option>
                                <option value="2"> 2</option>
                                <option value="3"> 3</option>
                                <option value="4"> 4</option>
                                <option value="5"> 5</option>
                                <option value="6"> 6</option>
                                <option value="7"> 7</option>
                                <option value="8"> 8</option>
                                <option value="9"> 9</option>
                                <option value="10"> 10</option>
                                <option value="11"> 11</option>
                                <option value="12"> 12</option>
                                <option value="13"> 13</option>
                                <option value="14"> 14</option>
                                <option value="15"> 15</option>
                                <option value="16"> 16</option>
                                <option value="17"> 17</option>
                                <option value="18"> 18</option>
                                <option value="19"> 19</option>
                                <option value="20"> 20</option>
                                <option value="21"> 21</option>
                                <option value="22"> 22</option>
                                <option value="23"> 23</option>
                                <option value="24"> 24</option>
                                <option value="25"> 25</option>
                                <option value="26"> 26</option>
                                <option value="27"> 27</option>
                                <option value="28"> 28</option>
                                <option value="29"> 29</option>
                                <option value="30"> 30</option>
                                <option value="31"> 31</option>
                            </select>
                            <select class="form-select w-25 mt-3" aria-label="Default select example" v-model.trim="$v.month.$model" :class="{'is-invalid':$v.month.$error,'is-valid':!$v.month.$invalid}">
                              <div v-if="!$v.month.required" class="invalid-feedback">Month is required!</div>
                              <div class="valid-feedback"> Looks good!</div>
                                <option selected>Month</option>
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </select>
                        <select class="form-select w-25 mt-3" aria-label="Default select example"  v-model.trim="$v.year.$model" :class="{'is-invalid':$v.year.$error,'is-valid':!$v.year.$invalid}">
                          <div v-if="!$v.year.required" class="invalid-feedback">Year is required!</div>
                              <div class="valid-feedback"> Looks good!</div>
                          <option selected>Year</option>
                          <option value="1995">1995</option>
                          <option value="1996">1996</option>
                          <option value="1997">1997</option>
                          <option value="1998">1998</option>
                          <option value="1999">1999</option>
                          <option value="2000">2000</option>
                          <option value="2001">2001</option>
                          <option value="2002">2002</option>
                          <option value="2003">2003</option>
                          <option value="2004">2004</option>
                          <option value="2005">2005</option>
                          <option value="2006">2006</option>
                          <option value="2007">2007</option>
                          <option value="2008">2008</option>
                          <option value="2009">2009</option>
                          <option value="2010">2010</option>
                          <option value="2011">2011</option>
                          <option value="2012">2012</option>
                          <option value="2013">2013</option>
                          <option value="2014">2014</option>
                          <option value="2015">2015</option>
                          <option value="2016">2016</option>
                          <option value="2017">2017</option>
                          <option value="2018">2018</option>
                          <option value="2019">2019</option>
                          <option value="2020">2020</option>
                          <option value="2021">2021</option>
                          <option value="2022">2022</option>
                        </select>
                        </div>
                      </div>
                      <div class="mb-3 mt-3">
                            <label for="exampleInputnumber" class="form-label">Contact Number<span class="color">*</span></label>
                            <input type="number" v-model.trim="$v.contact.$model" :class="{'is-invalid':$v.contact.$error,'is-valid':!$v.contact.$invalid}" class="form-control" id="exampleInputnumber" placeholder="Enter Number" aria-describedby="numberHelp"/>
                            <div v-if="!$v.contact.required" class="invalid-feedback">Your contact Number is required!</div>
                            <div v-if="!$v.contact.minLength" class="invalid-feedback">your Contact Number must contains atleast {{$v.contact.$params.minLength.min}} Numbers.</div>
                            <div v-if="!$v.contact.maxLength" class="invalid-feedback">your Contact Number must contains at most {{$v.contact.$params.maxLength.max}} Numbers.</div>
                            <div class="valid-feedback"> Looks good!</div>
                       </div>
                </div>
                <div class="mt-5 mb-5">
                  <button class="btn btn-success text-white w-25">Submit</button>
                </div>
            </form>
      </div>
      <div class="col-md-4 d-none d-md-block">
        <p class="required"><span class="color">*</span> Required Information</p>
      </div>
    </div>
            
  </div>
</template>

<script>
import {required,minLength,maxLength,email} from 'vuelidate/lib/validators'

export default {
  name: "FormValidation",
  data(){
      return{
          email:'',
          saluation:'',
          firstname:'',
          surname:'',
          postcode:'',
          city:'',
          street:'',
          housenumber:'',
          additional:'',
          day:'',
          month:'',
          year:'',
          contact:'',
        }
  },
  validations:{
      email:{
          required,
          email,
      },
      saluation:{
        required
      },
      firstname:{
          required,
          minLength:minLength(3),
          maxLength:maxLength(10)
      },
      surname:{
          required,
          minLength:minLength(5),
          maxLength:maxLength(12)
      },
      postcode:{
          required,
          minLength:minLength(5),
          maxLength:maxLength(6)
      },
      city:{required},
      street:{required},
      housenumber:{required},
      day:{required},
      month:{required},
      year:{required},
      contact:{
          required,
          minLength:minLength(10),
          maxLength:maxLength(12),
      }
    },
    methods:{
      resetData(){
        this.email='';
        this.saluation='',
        this.firstname='';
         this. surname='';
         this. postcode='';
         this. city='';
          this.street='';
          this.housenumber='';
          this.additional='',
          this.day='';
         this. month='';
         this. year='';
          this.contact='';

      },
        submit(){
            this.$v.$touch();
            if(this.$v.$pendding || this.$v.$error) return;
            alert('Data Submitted Succesfully.');
            this.$v.$reset();
            this.resetData();

        }
            
    }
};
</script>

<style scoped>
h1 {
  font-weight: bold;
}
.color{
  color:red;
}
.form-check-label{
    margin-left: 10px;
}
input[type="radio"]{
   display:none;
}
.radio-control{
    width:15px;
    height:15px;
    border:1px solid #222;
    border-radius: 50%;
    display:inline-block;
    
}
.radio-control::after{
    content:"";
    width:7px;
    height:7px;
    display: block;
    background-color: #222;
    border-radius: 50%;
    margin-top: 3px;
    margin-left: 3px;
    transform: scale(0);

}
input[type="radio"]:checked+.radio-control::after{
    transform: scale(1);
}
.btn-success{
  margin-left:250px;
}
.required{
    margin-left:40px;
}
@media screen and (max-width:600px){
  .btn-success{
  margin-left:100px;
}
}
</style>