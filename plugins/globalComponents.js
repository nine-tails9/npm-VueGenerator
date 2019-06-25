import Tbutton from "../primitives/button";
import Tcheckbox from "../primitives/checkbox";
import Tdropdown from "../primitives/dropdown";
import Tedit from "../primitives/edit";
import Temail from "../primitives/email";
import Tnumber from "../primitives/number";
import Tphone from "../primitives/phone";
import Tsearchabledropdown from "../primitives/searchabledropdown";
import Ttextarea from "../primitives/textarea";
import Ttextinput from "../primitives/textinput";

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