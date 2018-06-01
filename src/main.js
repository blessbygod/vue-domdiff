// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Object.defineProperty(window, 'oldVnode', {
    set(val) {
      try {
        let $old = document.getElementById('oldVnode')
        let htmls = [];
        val.forEach(vnode => {
            let text = vnode.children[0].text;
            htmls.push(text);
        })
        $old.innerHTML = htmls.join('<br>');
      } catch(ex) {

      }
    }
})
Object.defineProperty(window, 'newVnode', {
    set(val) {
        try {
          let $new = document.getElementById('newVnode')
          let htmls = [];
          val.forEach(vnode => {
              let text = vnode.children[0].text;
              htmls.push(text);
          })
          $new.innerHTML = htmls.join('<br>');
        } catch(ex) {

        }
    }
})
Object.defineProperty(window, 'oldStartVnode', {
    set(val) {
        try {
          let $new = document.getElementById('oldStartVnode')
          let text = val.children[0].text || '';
          if (!text) return;
          $new.innerHTML = $new.innerHTML + '--' + text;
        } catch(ex) {

        }
    }
})
Object.defineProperty(window, 'oldEndVnode', {
    set(val) {
        try {
          let $new = document.getElementById('oldEndVnode')
          let text = val.children[0].text || '';
          if (!text) return;
          $new.innerHTML = $new.innerHTML + '--' + text;
        } catch(ex) {

        }
    }
})
Object.defineProperty(window, 'newStartVnode', {
    set(val) {
        try {
          let $new = document.getElementById('newStartVnode')
          let text = val.children[0].text || '';
          if (!text) return;
          $new.innerHTML = $new.innerHTML + '--' + text;
        } catch(ex) {

        }
    }
})
Object.defineProperty(window, 'newEndVnode', {
    set(val) {
        try {
          let $new = document.getElementById('newEndVnode')
          let text = val.children[0].text || '';
          if (!text) return;
          $new.innerHTML = $new.innerHTML + '--' + text;
        } catch(ex) {

        }
    }
})