import Controller from '@ember/controller';
import $ from 'jquery';
import { match, not } from '@ember/object/computed';

export default Controller.extend({
    url: '',

    isValid: match('url', /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g),
    isDisabled: not('isValid'),

    actions: {
        searchUrlLocation(url = '') {

            $.getJSON('http://ip-api.com/json/' + url, null, (response) => {
                this.set('response', response);

            });


            this.set('responseMessage', `URL > ${this.get('url')} < Localizada Com Sucesso! `);
            this.set('url', '');
        },

        reset() {
            this.set('url', null);
            this.set('response', null);
            this.set('responseMessage', null);
        },



    }

});

