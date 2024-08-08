<template>
  <CardContent>
    <q-card-section
      class="profile-action-wrapper row q-pa-none q-mt-none column items-end"
    >
      <div class="col-1">
        <q-btn
          class="btn-details q-pa-none"
          icon="more_vert"
          unelevated
          square
          flat
        >
          <q-menu anchor="bottom end" self="top right">
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup dense>
                <q-item-section side>
                  <q-icon name="edit" />
                </q-item-section>
                <q-item-section>Edit</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup dense>
                <q-item-section side>
                  <q-icon name="delete" />
                </q-item-section>
                <q-item-section>Delete</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </div>
    </q-card-section>

    <q-card-section class="profile-avatar-wrapper text-center q-pt-none">
      <q-avatar class="profile-avatar q-mt-md">
        <!-- <q-btn round flat color="#222" icon="person" size="md" unelevated /> -->
        <img src="https://cdn.quasar.dev/img/avatar.png" /> </q-avatar
    ></q-card-section>
    <q-card-section class="text-center q-pt-none">
      <h2 class="q-ma-none text-subtitle1 text-weight-bold">
        Jackson Mangallay
      </h2>
      <h6
        class="q-ma-none text-caption text-weight-bold text-grey profile-position"
      >
        Software Developer
      </h6>
      <h6 class="q-mt-lg q-mb-none text-caption text-weight-bold text-grey">
        Vonex LTD.
      </h6>
    </q-card-section>
  </CardContent>
</template>

<script setup lang="ts"></script>

<style scoped>
.profile-action-wrapper {
  z-index: 10;
}

.profile-avatar-wrapper {
  margin-top: -30px;
}

.profile-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #eaeaea;
}

.profile-position {
  margin-top: -5px;
}

.btn-details {
  width: 100%;
}
</style>
