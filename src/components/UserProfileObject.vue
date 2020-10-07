<template>

  <v-card class="rounded-t-xl">
    <v-toolbar color="grey darken-3" class="white--text" flat>
      <v-spacer></v-spacer>
      <v-toolbar-title class="font-weight-bold">
        <h2>{{ name }}</h2>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <div class="text-center ma-3" v-if="user.company">
      <span>Works @ {{ user.company }}</span>
    </div>

    <div class="text-center ma-3">
      <v-avatar class="ma-3" size="124">
        <v-img :src="avatar"></v-img>
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

    <v-overlay :value="loading" absolute>
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>

  </v-card>

</template>

<script>
import AvatarPlaceholder from "@/assets/avatar-placeholder.png"

export default {
  name: "UserProfileObject",
  props: {
    user: {
      type: Object,
      // This has NO use ! If null is passed as
      // user the default it NOT used, Default is only
      // used if prop is not included
      // default: () => {
      //   return {
      //     name: null,
      //     avatar: null,
      //     company: null,
      //     followers: 0,
      //     following: 0,
      //     public_repos: 0
      //   }
      // }
    },
    loading: {
      type: [Boolean, String],
      default: false
    }
  },
  methods: {
  },
  computed: {
    avatar() {
      return this.user.avatar_url ? this.user.avatar_url : AvatarPlaceholder;
    },
    name() {
      return this.user.name ? this.user.name : 'John Doe';
    }
  }
};
</script>