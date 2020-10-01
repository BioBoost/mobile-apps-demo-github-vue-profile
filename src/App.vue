<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld v-show="false" />
      <v-row v-show="false">
        <v-col cols="12" md="6">
          <p>
            djsif jsdfidsjsdisjgfdigjfdgdfi fdjggifdj gi jfdgidgjgd fifgd jfgidf gjfd djsif jsdfidsjsdisjgfdigjfdgdfi fdjggifdj gi jfdgidgjgd fifgd jfgidf gjfd djsif jsdfidsjsdisjgfdigjfdgdfi fdjggifdj gi jfdgidgjgd fifgd jfgidf gjfd djsif jsdfidsjsdisjgfdigjfdgdfi fdjggifdj gi jfdgidgjgd fifgd jfgidf gjfd djsif jsdfidsjsdisjgfdigjfdgdfi fdjggifdj gi jfdgidgjgd fifgd jfgidf gjfd djsif jsdfidsjsdisjgfdigjfdgdfi fdjggifdj gi jfdgidgjgd fifgd jfgidf gjfd djsif jsdfidsjsdisjgfdigjfdgdfi fdjggifdj gi jfdgidgjgd fifgd jfgidf gjfd djsif jsdfidsjsdisjgfdigjfdgdfi fdjggifdj gi jfdgidgjgd fifgd jfgidf gjfd djsif jsdfidsjsdisjgfdigjfdgdfi fdjggifdj gi jfdgidgjgd fifgd jfgidf gjfd
          </p>
        </v-col>
        <v-col cols="12" md="6">
          <p>
            djsif jsdfidsjsdisjgfdigjfdgdfi fdjggifdj gi jfdgidgjgd fifgd jfgidf gjfd djsif jsdfidsjsdisjgfdigjfdgdfi fdjggifdj gi jfdgidgjgd fifgd jfgidf gjfd djsif jsdfidsjsdisjgfdigjfdgdfi fdjggifdj gi jfdgidgjgd fifgd jfgidf gjfd djsif jsdfidsjsdisjgfdigjfdgdfi fdjggifdj gi jfdgidgjgd fifgd jfgidf gjfd djsif jsdfidsjsdisjgfdigjfdgdfi fdjggifdj gi jfdgidgjgd fifgd jfgidf gjfd djsif jsdfidsjsdisjgfdigjfdgdfi fdjggifdj gi jfdgidgjgd fifgd jfgidf gjfd djsif jsdfidsjsdisjgfdigjfdgdfi fdjggifdj gi jfdgidgjgd fifgd jfgidf gjfd djsif jsdfidsjsdisjgfdigjfdgdfi fdjggifdj gi jfdgidgjgd fifgd jfgidf gjfd djsif jsdfidsjsdisjgfdigjfdgdfi fdjggifdj gi jfdgidgjgd fifgd jfgidf gjfd
          </p>
        </v-col>
      </v-row>



      
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
