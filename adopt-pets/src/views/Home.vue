<template>
  <div class="home-view-container">
    <h1>Adopt a new best friend.</h1>
    <h3>Cats for adoption: {{ getAllCats }}</h3>
    <h3>Dogs for adoption: {{ getAllDogs }}</h3>
    <h3>Total pets for adoption: {{ animalsCount }}</h3>
    <br>
    <button @click="togglePetForm" class="btn btn-primary">Add New Pet</button>
    <br>
    <br>

    <b-form @submit.prevent="handleSubmit" v-if="showPetForm">
      <b-form-group id="input-group-2" label="Pet's Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.species"
          :options="['cats', 'dogs']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet's Breed:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.breed"
          required
          placeholder="Enter breed"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet's Age:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="number"
          v-model="formData.age"
          required
          placeholder="Enter age"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Gender:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.gender"
          :options="['male', 'female', 'other']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet's Color:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.color"
          required
          placeholder="Enter color"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet's Weight:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="number"
          v-model="formData.weight"
          required
          placeholder="Enter weight"
        ></b-form-input>
      </b-form-group>

      <b-form-textarea
        id="textarea"
        v-model="formData.notes"
        placeholder="Enter pet's notes..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      showPetForm: false,
      formData: {
        name: '',
        age: 0,
        species: null,
        breed: '',
        gender: null,
        color: '',
        weight: 0,
        notes: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'animalsCount',
      'getAllCats',
      'getAllDogs'
    ])
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    togglePetForm () {
      this.showPetForm = !this.showPetForm
    },
    handleSubmit () {
      const { species, age, name, breed, gender, color, weight, notes } = this.formData
      const payload = {
        species,
        pet: {
          name,
          age,
          breed,
          species,
          gender,
          color,
          weight,
          notes
        }
      }
      this.addPet(payload)

      // RESET FORM AFTER SUBMIT
      this.formData = {
        name: '',
        age: 0,
        species: null
      }
    }
  }
}
</script>
