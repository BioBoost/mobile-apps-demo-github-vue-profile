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
        <v-img :src="avatar"></v-img>
      </v-avatar>
    </div>

    <v-card-text class="primary lighten-1 text-center white--text">

      <v-row>
        <v-col cols="12" sm="6">
          <span>Public Repos</span>
        </v-col>
        <v-col cols="12" sm="6">
          <h2>{{ publicRepos }}</h2>
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

    <v-overlay :value="loading" absolute>
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>

  </v-card>

</template>

<script>

export default {
  name: "UserProfileDetails",
  props: {
    name: {
      type: String,
      default: 'Unknown'
    },
    company: {
      type: String,
      default: null
    },
    avatar: {
      type: String,
      default: null
    },
    followers: {
      type: Number,
      default: 0
    },
    following: {
      type: Number,
      default: 0
    },
    publicRepos: {
      type: Number,
      default: 0
    },
    loading: {
      type: [Boolean, String],
      default: false
    }
  },
  methods: {
  },
  computed: {
  }
};
</script>