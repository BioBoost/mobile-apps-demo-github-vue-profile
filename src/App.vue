<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >

      <v-spacer></v-spacer>

      <v-toolbar-title>Cool GitHub Profile Fetcher</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-row>
        <v-col cols="6">
        </v-col>
        <v-col cols="6">
          <v-text-field
            hide-details
            placeholder="Fetch profile"
            prepend-icon="mdi-magnify"
            single-line
            clearable
            @keyup.enter="doSearch"
            v-model="search"
          ></v-text-field>
        </v-col>
      </v-row>



    </v-app-bar>

    <v-main>
      <v-row justify="center">
        <v-col cols="8">
          <v-alert
            :value="!!error"
            border="left"
            close-text="Close"
            color="red"
            dark
            dismissible
          >
            {{ error }}
          </v-alert>
        </v-col>
      </v-row>
      
      <v-row justify="center">
        <v-col cols="12" md="6" lg="4">
          <UserProfileDetails
            :name="user.name"
            :avatar_url="user.avatar_url"
            :company="user.company"
            :followers="user.followers"
            :following="user.following"
            :publicRepos="user.public_repos"
            :loading="loading" />
        </v-col>
        <v-col cols="12" md="6" lg="4">
          <UserProfileObject
            :user="userObj"
            :loading="loading" />
        </v-col>
        <v-col cols="12" md="6" lg="4">
          <UserProfileObject
            :user="user"
            :loading="loading" />
        </v-col>
        <v-col cols="12" md="6" lg="4">
          <ApiUser :uid="username" />
        </v-col>
      </v-row>

    </v-main>
  </v-app>
</template>

<script>
import UsersAPI from './api/users';
import UserProfileDetails from "@/components/UserProfileDetails";
import UserProfileObject from "@/components/UserProfileObject";
import ApiUser from "@/components/ApiUser";

export default {
  name: 'App',

  created() {
    console.log("Loading user ...");
    this.fetch();
    this.fetchWithError();
  },

  components: {
    UserProfileDetails,
    UserProfileObject,
    ApiUser
  },

  data: () => ({
    user: {},
    userObj: {},
    loading: false,
    error: null,
    search: '',
    username: 'BioBoost'
  }),

  methods: {
    doSearch() {
      this.username = this.search;
      this.fetch();
    },
    fetch() {
      console.log(`Fetching profile of ${this.username} ...`);
      this.loading = true;

      setTimeout(() => {
        UsersAPI.getUser(this.username)
        .then(response => {
          console.log(response);

          // Populate UserProfile_Details
          this.user = response.data;
          this.userObj = response.data;
          this.loading = false;
        })
        .catch(e => {
          this.error = e;
        })
      }, 2000)
    },
    fetchWithError() {
      console.log("Fetching an error ....");

      setTimeout(() => {
        UsersAPI.getUser('none')
        .then(response => {
          console.log(response);
        })
        .catch(e => {
          this.error = e;
        })
      }, 2000)
    }
  }
};
</script>
