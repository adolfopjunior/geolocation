import Controller from '@ember/controller';
import $ from 'jquery';

export default Controller.extend({
    actions: {
        searchUrlLocation(url = '') {

            $.getJSON('http://ip-api.com/json/' + url, null, (response) => {
                this.set('response', response);
            });
            this.set('responseMessage', `A Sua Localização foi Encontrada com Sucesso!`);
            this.set('url', '');
        },

        reset() {
            this.set('url', null);
            this.set('response', null);
            this.set('responseMessage', null);
        },
    }

});

