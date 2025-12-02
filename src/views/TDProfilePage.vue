<template>
  <v-container class="py-10">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card elevation="6" class="pa-6 cv-card">
          <!-- Header -->
          <v-row align="center">
            <v-col cols="12" md="4" class="text-center">
              <v-avatar size="150">
                <img src="/Serhii_Chernyshov-Run.jpg" alt="Serhii Chernushov" class="w-100" />
              </v-avatar>
            </v-col>
            <v-col cols="12" md="8">
              <h2 class="text-h4 font-weight-bold mb-1">Serhii Chernushov</h2>
              <p class="text-subtitle-1 mb-2">Frontend Developer</p>
              <div class="d-flex flex-wrap gap-2">
                <v-chip color="primary" class="ma-1">Vue 3</v-chip>
                <v-chip color="primary" class="ma-1">Nuxt</v-chip>
                <v-chip color="primary" class="ma-1">TypeScript</v-chip>
              </div>
            </v-col>
          </v-row>

          <v-divider class="my-4"></v-divider>

          <!-- Contacts -->
          <h3 class="text-h6 font-weight-bold mb-2">Contacts</h3>
          <v-row>
            <v-col cols="12" sm="6">
              <v-btn target="_blank" block color="primary" href="tel:+380975908274" prepend-icon="mdi-phone">
                Call me
              </v-btn>
            </v-col>
            <v-col cols="12" sm="6">
              <v-btn target="_blank" block color="secondary" href="mailto:sergei.chernyshov88@gmail.com" prepend-icon="mdi-email">
                Email me
              </v-btn>
            </v-col>
            <v-col cols="12" sm="6">
              <v-btn target="_blank" block color="info" href="https://t.me/chernushov88" prepend-icon="mdi-telegram">
                Telegram
              </v-btn>
            </v-col>
            <v-col cols="12" sm="6">
              <v-btn target="_blank" block color="blue-darken-2" href="https://www.linkedin.com/in/serhii-chernushov-egorovich/" prepend-icon="mdi-linkedin">
                LinkedIn
              </v-btn>
            </v-col>
          </v-row>

          <v-divider class="my-4"></v-divider>

          <!-- Skills -->
          <h3 class="text-h6 font-weight-bold mb-2">Skills</h3>
          <v-list density="compact">
            <v-list-item title="Frontend development, SPA/SSR apps, API integration"></v-list-item>
            <v-list-item title="Adaptive UI/UX, component-based architecture"></v-list-item>
            <v-list-item title="Debugging, optimization, project estimation"></v-list-item>
            <v-list-item title="Cross-browser layout, teamwork, client communication"></v-list-item>
          </v-list>

          <v-divider class="my-4"></v-divider>

          <!-- Work Experience (fixed wrapping) -->
          <h3 class="text-h6 font-weight-bold mb-2">Work Experience</h3>
          <v-timeline align="start" side="end">
            <v-timeline-item dot-color="primary" class="py-3">
              <v-card flat class="pa-4 text-wrap">
                <div class="text-h6 mb-1">VIS-A-VIS (Jan 2025 — Present)</div>
                <div class="text-subtitle-2 mb-2">Middle Frontend Developer</div>
                <div>
                  Financial web apps (Top-10 bank of Ukraine). Time & Materials workflow. Daily syncs with client teams.
                  Stack: Laravel, Docker, Vue, Nuxt 3, TypeScript, Tailwind. Built responsive interfaces, maintained features,
                  improved architecture and code quality.
                </div>
              </v-card>
            </v-timeline-item>

            <v-timeline-item dot-color="primary" class="py-3">
              <v-card flat class="pa-4 text-wrap">
                <div class="text-h6 mb-1">Poole Software Limited (Apr 2023 — Dec 2024, Remote UK)</div>
                <div class="text-subtitle-2 mb-2">Software Developer</div>
                <div>
                  Requirements analysis, prototyping, building and testing features. Collaboration with designers and developers.
                  Applied PM methodologies, version control, and best practices. Implemented client-facing features and UI/UX updates.
                </div>
              </v-card>
            </v-timeline-item>

            <v-timeline-item dot-color="primary" class="py-3">
              <v-card flat class="pa-4 text-wrap">
                <div class="text-h6 mb-1">Lexstatus / Storehouse (Jan 2021 — 2023)</div>
                <div class="text-subtitle-2 mb-2">Frontend Developer</div>
                <div>
                  Custom WordPress plugins, integrations, adaptive layout, JS logic, animations, project deployment and maintenance.
                </div>
              </v-card>
            </v-timeline-item>

            <v-timeline-item dot-color="primary" class="py-3">
              <v-card flat class="pa-4 text-wrap">
                <div class="text-h6 mb-1">Technofit / IE Korshunov (May 2016 — Jan 2021)</div>
                <div class="text-subtitle-2 mb-2">Frontend Developer</div>
                <div>
                  Vue/Vuex and Node.js development. WordPress/Bitrix customizations. Adaptive layout, animations, JS functionality.
                  Client project support and deployment.
                </div>
              </v-card>
            </v-timeline-item>

            <v-timeline-item dot-color="primary" class="py-3">
              <v-card flat class="pa-4 text-wrap">
                <div class="text-h6 mb-1">Skarlat Group (Jan 2016 — May 2016)</div>
                <div class="text-subtitle-2 mb-2">Web Developer</div>
                <div>Pixel-perfect layout from PSD/Zeplin/Figma. LESS/SASS/SCSS. WordPress integration.</div>
              </v-card>
            </v-timeline-item>

            <v-timeline-item dot-color="primary" class="py-3">
              <v-card flat class="pa-4 text-wrap">
                <div class="text-h6 mb-1">DUBL Studio (Aug 2015 — Dec 2015)</div>
                <div class="text-subtitle-2 mb-2">HTML Coder</div>
                <div>Layout for online stores on Bitrix. Style/script adjustments post-deployment.</div>
              </v-card>
            </v-timeline-item>

            <v-timeline-item dot-color="primary" class="py-3">
              <v-card flat class="pa-4 text-wrap">
                <div class="text-h6 mb-1">Freelance (Dec 2014 — Sep 2015)</div>
                <div class="text-subtitle-2 mb-2">Web-master</div>
                <div>Freelance web development and site maintenance.</div>
              </v-card>
            </v-timeline-item>

            <v-timeline-item dot-color="primary" class="py-3">
              <v-card flat class="pa-4 text-wrap">
                <div class="text-h6 mb-1">WAP3 (Oct 2014 — Dec 2014)</div>
                <div class="text-subtitle-2 mb-2">QA</div>
                <div>Testing and quality assurance tasks.</div>
              </v-card>
            </v-timeline-item>
          </v-timeline>

          <v-divider class="my-4"></v-divider>

          <!-- About Me (English) -->
          <h3 class="text-h6 font-weight-bold mb-2">About me</h3>
          <p class="text-wrap">
            I’m open to new opportunities and collaboration. Across all the companies I’ve worked with,
            clients and teams were satisfied with my results. I’m the person who can elevate your product
            and improve your business through reliable, scalable, and user‑focused frontend development.
          </p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// No script needed for static CV content, unless you want theme toggles or tracking.
</script>

<style scoped>
.cv-card {
  /* ensures inner content never clips */
  overflow: visible;
}

.text-wrap {
  white-space: normal;
  word-break: break-word;
  overflow-wrap: anywhere;
}
</style>
