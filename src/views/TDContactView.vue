<template>
  <v-container class="my-6">
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="7">
        <v-card class="pa-4 pa-sm-6" elevation="10">
          <v-card-title class="text-h4 font-weight-bold primary--text mb-4">
            Serhii Chernyshov
          </v-card-title>
          <v-card-subtitle class="text-h6 font-weight-medium mb-4">
            Frontend Developer (Vue 2 & Vue 3)
          </v-card-subtitle>

          <v-card-text>
            <p class="mb-4">
              I am a **Frontend Developer with over 10 years of experience** in
              web development and more than **3 years of focused work with
              Vue.js (Vue 2 & Vue 3)**, including migration from Quasar to
              Quasar 2.
            </p>
            <p class="mb-4">
              Over the past year, I have been responsible for **migrating a
              large-scale project from Vue 2 to Vue 3**—an experience that
              directly matches the requirements of many high-level vacancies.
            </p>
            <p class="mb-6">
              In addition, I have hands-on experience with Laravel and Bitrix
              (frontend side), solid skills in **HTML, CSS, JavaScript, Git**,
              and working knowledge of PHP and Unix-based systems. I also
              understand the **Nginx–PHP–MySQL architecture**. I pay close
              attention to code quality, quickly adapt to modern tools, and I am
              highly motivated by new challenges. I am particularly interested
              in long-term collaboration.
            </p>

            <v-divider class="my-6"></v-divider>

            <v-alert
              density="compact"
              type="success"
              variant="tonal"
              color="primary"
              class="mb-6"
            >
              <span class="font-weight-medium">Full Professional History:</span>
              <a
                href="https://www.linkedin.com/in/serhii-chernyshov-egorovich/details/experience/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-decoration-underline text-primary"
              >
                View my detailed experience on LinkedIn
                <v-icon size="small" right>mdi-open-in-new</v-icon>
              </a>
            </v-alert>
            <h3 class="text-h6 mb-3 font-weight-bold">My Contact Details</h3>
            <v-list density="compact" class="pa-0">
              <v-list-item class="px-0">
                <template v-slot:prepend>
                  <v-icon color="primary" class="mr-4">mdi-phone</v-icon>
                </template>
                <v-list-item-title class="font-weight-medium">
                  Phone:
                  <a href="tel:+380975908274" class="text-decoration-none">
                    +380 97 590 8274
                  </a>
                </v-list-item-title>
              </v-list-item>

              <v-list-item class="px-0">
                <template v-slot:prepend>
                  <v-icon color="primary" class="mr-4">mdi-email</v-icon>
                </template>
                <v-list-item-title class="font-weight-medium">
                  Email:
                  <a
                    href="mailto:chernushov88@gmail.com"
                    class="text-decoration-none"
                  >
                    chernushov88@gmail.com
                  </a>
                </v-list-item-title>
              </v-list-item>

              <v-list-item class="px-0">
                <template v-slot:prepend>
                  <v-icon color="primary" class="mr-4">mdi-linkedin</v-icon>
                </template>
                <v-list-item-title class="font-weight-medium">
                  LinkedIn:
                  <a
                    href="https://linkedin.com/in/serhii-chernyshov-egorovich"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-decoration-none"
                  >
                    linkedin.com/in/serhii-chernyshov-egorovich
                  </a>
                </v-list-item-title>
              </v-list-item>
            </v-list>

            <v-divider class="my-6"></v-divider>

            <h3 class="text-h6 mb-3 font-weight-bold">
              Professional Reference
            </h3>
            <v-alert
              type="info"
              prominent
              color="blue-grey-lighten-5"
              border="left"
              class="pa-4"
              elevation="0"
            >
              <p class="font-weight-medium mb-2">
                A professional reference from my recent work can be obtained
                from my manager at **Poole Software Limited**:
              </p>
              <div class="ml-2">
                <p>
                  <v-icon small class="mr-2" color="blue-grey">
                    mdi-account
                  </v-icon>
                  <span class="font-weight-bold">Andrei Bazanov</span>
                </p>
                <p>
                  <v-icon small class="mr-2" color="blue-grey">
                    mdi-phone
                  </v-icon>
                  <a href="tel:+441202030082" class="text-decoration-none">
                    +44 (0) 1202 030082
                  </a>
                </p>
                <p>
                  <v-icon small class="mr-2" color="blue-grey">
                    mdi-email
                  </v-icon>
                  <a
                    href="mailto:andrei@poolesoftware.com"
                    class="text-decoration-none"
                  >
                    andrei@poolesoftware.com
                  </a>
                </p>
                <p>
                  <v-icon small class="mr-2" color="blue-grey">mdi-web</v-icon>
                  <a
                    href="https://poolesoftware.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-decoration-none"
                  >
                    poolesoftware.com
                  </a>
                </p>
              </div>
            </v-alert>

            <p class="mt-6 text-center font-italic text-caption">
              I would be glad to discuss my candidacy further and complete a
              test assignment if required. Thank you for your time and
              consideration.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  // name: 'ContactView',
};
</script>

<style scoped>
a {
  color: var(--v-theme-primary);
  text-decoration: none;
}
a:hover {
  text-decoration: underline !important;
}
</style>
