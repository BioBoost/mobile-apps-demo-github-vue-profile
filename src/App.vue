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
          <UserProfileDetails
            :name="user.name"
            :avatar="user.avatar_url"
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
          <ApiUser id="bioboost" />
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
    this.loading = true;
    setTimeout(() => {
      this.fetch();
    }, 5000)
  },

  components: {
    UserProfileDetails,
    UserProfileObject,
    ApiUser
  },

  data: () => ({
    user: {},
    userObj: {},
    loading: false
  }),

  methods: {
    fetch() {
      console.log("Fetching profile ....");

      UsersAPI.getUser('bioboost')
      .then(response => {
        console.log(response);

        // Populate UserProfile_Details
        this.user = response.data;
        this.userObj = response.data;
        this.loading = false;
      })
      .catch(e => {
        console.log(e);
      })
    }
  }
};
</script>
