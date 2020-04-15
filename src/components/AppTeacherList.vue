<template>
  <b-container class="bv-example-row pt-5" v-if="allTeachers">
    <b-row>
      <div
        v-for="teacher in allTeachers"
        :key="teacher.id"
        class="p-2 col-md-4"
      >
        <b-card
          :title="teacher.first_name"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
        >
          <b-card-text>
            Gradebook:
            {{
              teacher.gradebook
                ? teacher.gradebook.name
                : 'Professor is available'
            }}
          </b-card-text>

          <b-button :to="`teachers/${teacher.id}`" variant="primary">
            Visit teacher page
          </b-button>
        </b-card>
      </div>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AppTeacherList',
  computed: {
    ...mapGetters(['allTeachers']),
  },
  methods: {
    ...mapActions(['getTeachers']),
  },
  created() {
    this.getTeachers();
  },
};
</script>

<style></style>
