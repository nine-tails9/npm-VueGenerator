import Tbutton from "../components/primitives/button";
import Tcheckbox from "../components/primitives/checkbox";
import Tdropdown from "../components/primitives/dropdown";
import Tedit from "../components/primitives/edit";
import Temail from "../components/primitives/email";
import Tnumber from "../components/primitives/number";
import Tphone from "../components/primitives/phone";
import Tsearchabledropdown from "../components/primitives/searchabledropdown";
import Ttextarea from "../components/primitives/textarea";
import Ttextinput from "../components/primitives/textinput";

export default {
    install(Vue) {
        Vue.component('Tbutton', Tbutton);
        Vue.component('Tcheckbox', Tcheckbox);
        Vue.component('Tdropdown', Tdropdown);
        Vue.component('Tedit', Tedit);
        Vue.component('Temail', Temail);
        Vue.component('Tnumber', Tnumber);
        Vue.component('Tphone', Tphone);
        Vue.component('Tsearchabledropdown', Tsearchabledropdown);
        Vue.component('Ttextarea', Ttextarea);
        Vue.component('Ttextinput', Ttextinput);


    }
};