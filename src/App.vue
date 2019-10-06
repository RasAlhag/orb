<template>
    <v-app>
        <v-navigation-drawer app>
            <!-- -->
        </v-navigation-drawer>

        <v-app-bar app>
            <!-- -->
        </v-app-bar>

        <!-- Sizes your content based upon application components -->
        <v-content>

            <!-- Provides the application the proper gutter -->
            <v-container fluid>
                <router-view>




                </router-view>
            </v-container>
        </v-content>

        <v-footer app>
            <!-- -->
        </v-footer>
    </v-app>
</template>

<script>


export default {
  name: 'app',
  components: {

  }
}
</script>

<style>

</style>
