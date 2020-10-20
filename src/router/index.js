/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
import Dashboard from "@/components/Dashboard.vue";
import NewContact from "@/components/NewContact.vue";
import EditContact from "@/components/EditContact.vue";
import ViewContact from "@/components/ViewContact.vue";
import Login from "@/components/Login.vue";
import Signup from "@/components/SignUp.vue";
import firebase from "firebase/app";

Vue.use(Router);

let router = new Router({
	routes: [
		{
			path: "/",
			name: "dashboard",
			component: Dashboard,
			meta: {
				requiresAuth: true,
			},
		},
		{
			path: "/login",
			name: "login",
			component: Login,
			meta: {
				requiresGuest: true,
			},
		},
		{
			path: "/signup",
			name: "signup",
			component: Signup,
			meta: {
				requiresGuest: true,
			},
		},
		{
			path: "/new",
			name: "new-contact",
			component: NewContact,
			meta: {
				requiresAuth: true,
			},
		},
		{
			path: "/edit/:contact_id",
			name: "edit-contact",
			component: EditContact,
			meta: {
				requiresAuth: true,
			},
		},
		{
			path: "/:contact_id",
			name: "view-contact",
			component: ViewContact,
			meta: {
				requiresAuth: true,
			},
		},
	],
});

// Route Guard
router.beforeEach((to, from, next) => {
	// Check for requiresAuth guard
	if (to.matched.some((record) => record.meta.requiresAuth)) {
		// Check if user Not Logged
		if (!firebase.auth().currentUser) {
			next({
				path: "/login",
				query: {
					redirect: to.fullPath,
				},
			});
		} else {
			next();
		}
	} else if (to.matched.some((record) => record.meta.requiresGuest)) {
		if (firebase.auth().currentUser) {
			next({
				path: "/",
				query: {
					redirect: to.fullPath,
				},
			});
		} else {
			next();
		}
	}
});

export default router;
