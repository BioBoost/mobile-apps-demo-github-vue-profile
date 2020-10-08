<template>
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

</template>

<script>
import AvatarPlaceholder from "@/assets/avatar-placeholder.png"
import UsersAPI from "@/api/users"

export default {
  name: 'ApiUser',
  props: {
    uid: {
      type: String,
    },
  },
  created() {
    this.fetch();
  },
  data() {
    return {
      user: {
        name: 'John Doe',
        following: 0,
        followers: 0,
        public_repos: 0,
        avatar_url: AvatarPlaceholder
      }
    }
  },
  methods: {
    fetch() {
      console.log("Fetching profile ....");

      setTimeout(() => {
        UsersAPI.getUser(this.uid)
        .then(response => {
          console.log(response);

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
