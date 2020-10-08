<template>
  <v-card class="rounded-t-xl">
    <v-toolbar color="grey darken-3" class="white--text" flat>
      <v-spacer></v-spacer>
      <v-toolbar-title class="font-weight-bold">
        <h2>{{ name }}</h2>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <div class="text-center ma-3" v-if="company">
      <span>Works @ {{ company }}</span>
    </div>

    <div class="text-center ma-3">
      <v-avatar class="ma-3" size="124">
        <v-img :src="avatar_url"></v-img>
      </v-avatar>
    </div>

    <v-card-text class="primary lighten-1 text-center white--text">

      <v-row>
        <v-col cols="12" sm="6">
          <span>Public Repos</span>
        </v-col>
        <v-col cols="12" sm="6">
          <h2>{{ public_repos }}</h2>
        </v-col>
      </v-row>

      <v-divider />

      <v-row>
        <v-col cols="12" sm="6">
          <span>Followers</span>
        </v-col>
        <v-col cols="12" sm="6">
          <h2>{{ followers }}</h2>
        </v-col>
      </v-row>

      <v-divider />

      <v-row>
        <v-col cols="12" sm="6">
          <span>Following</span>
        </v-col>
        <v-col cols="12" sm="6">
          <h2>{{ following }}</h2>
        </v-col>
      </v-row>

    </v-card-text>

  </v-card>

</template>

<script>
import AvatarPlaceholder from "@/assets/avatar-placeholder.png"

export default {
  name: 'UserDetails',
  props: {
    name: {
      type: String,
      default: 'John Doe'
    },
    company: {
      type: String,
      default: ''
    },
    followers: {
      type: Number,
      default: 0
    },
    following: {
      type: Number,
      default: 0
    },
    public_repos: {
      type: Number,
      default: 0
    },
    avatar_url: {
      type: String,
      default: AvatarPlaceholder
    }
  }

};
</script>
