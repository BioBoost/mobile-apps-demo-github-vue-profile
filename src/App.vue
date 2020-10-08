<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    </v-app-bar>

    <v-main>
      <v-row justify="center">
        <v-col cols="12" md="6" lg="4">


        </v-col>
      </v-row>

    </v-main>
  </v-app>
</template>

<script>
import UsersAPI from './api/users';
import UserDetails from "@/components/UserDetails";   // @ = src dir

export default {
  name: 'App',
  // Tell Vue what components we need
  components: {
    UserDetails
  },
  created() {
    // console.log("Loading user ...");
    // this.loading = true;
      this.fetch();
  },

  data: () => ({
    user: {},
  }),

  methods: {
    fetch() {
      console.log("Fetching profile ....");

      setTimeout(() => {
        UsersAPI.getUser('bioboost')
        .then(response => {
          console.log(response);

          // Populate UserProfile_Details
          this.user = response.data;
        })
        .catch(e => {
          console.log(e);
        })
      }, 2000)
    }
  }
};
</script>
