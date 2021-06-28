import Vue from "vue";
import { createApp } from 'vue'
import VueApollo from "vue-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import VueRouter from 'vue-router'
import App from "./App.vue";

const app = createApp(App);

app.config.productionTip = false;
app.use(router)
app.use(Antd).mount('#app');

Vue.use(VueRouter)

// Cache implementation
const cache = new InMemoryCache();

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: "https://localhost:8080/graphql",
});

// Create the apollo client
const apolloClient = new ApolloClient({
  cache,
  link: httpLink,
});

// Install the vue plugin
// With the apollo client instance
Vue.use(VueApollo, {
  apolloClient,
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

new Vue({
  apolloProvider,
  render: h => h(App),
}).$mount("#app");
