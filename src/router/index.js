import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "@/components/Dashboard.vue";
import NewContact from "@/components/NewContact.vue";
import EditContact from "@/components/EditContact.vue";
import ViewContact from "@/components/ViewContact.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard
  },
  {
    path: "/new",
    name: "new-contact",
    component: NewContact
  },
  {
    path: "/edit/:contact_id",
    name: "edit-contact",
    component: EditContact
  },
  {
    path: "/:contact_id",
    name: "view-contact",
    component: ViewContact
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
