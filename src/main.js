import { createApp } from 'vue';
import router from './router';
import './assets/css/app.css';
import BackToTop from 'vue-backtotop';
import App from './App.vue';
import feather from 'feather-icons';
import Layout from './components/layouts/Layout.vue'

feather.replace();
const app = createApp(App);
app.use('layout', Layout);

app
  .use(router)
  .use(BackToTop)
  .mount('#app');

const appTheme = localStorage.getItem('theme');

// Check what is the active theme and change theme when user clicks on the theme button in header.
if (
  appTheme === 'dark' &&
  document.querySelector('body').classList.contains('app-theme')
) {
  document.querySelector('body').classList.add('bg-primary-dark');
} else {
  document.querySelector('body').classList.add('bg-secondary-light');
}
