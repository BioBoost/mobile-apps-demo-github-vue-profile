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

          <v-card class="rounded-t-xl">
            <v-toolbar color="grey darken-3" class="white--text" flat>
              <v-spacer></v-spacer>
              <v-toolbar-title class="font-weight-bold">
                <h2>{{ user.name }}</h2>
              </v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>

            <div class="text-center ma-3" v-if="user.company">
              <span>Works @ {{ user.company }}</span>
            </div>

            <div class="text-center ma-3">
              <v-avatar class="ma-3" size="124">
                <v-img :src="user.avatar_url"></v-img>
              </v-avatar>
            </div>

            <v-card-text class="primary lighten-1 text-center white--text">

              <v-row>
                <v-col cols="12" sm="6">
                  <span>Public Repos</span>
                </v-col>
                <v-col cols="12" sm="6">
                  <h2>{{ user.public_repos }}</h2>
                </v-col>
              </v-row>

              <v-divider />

              <v-row>
                <v-col cols="12" sm="6">
                  <span>Followers</span>
                </v-col>
                <v-col cols="12" sm="6">
                  <h2>{{ user.followers }}</h2>
                </v-col>
              </v-row>

              <v-divider />

              <v-row>
                <v-col cols="12" sm="6">
                  <span>Following</span>
                </v-col>
                <v-col cols="12" sm="6">
                  <h2>{{ user.following }}</h2>
                </v-col>
              </v-row>

            </v-card-text>

          </v-card>

        </v-col>
      </v-row>

    </v-main>
  </v-app>
</template>

<script>
import UsersAPI from './api/users';

export default {
  name: 'App',

  created() {
    // console.log("Loading user ...");
    // this.loading = true;
      this.fetch();
  },

  components: {
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
