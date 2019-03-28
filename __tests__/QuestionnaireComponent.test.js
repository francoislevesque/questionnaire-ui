import { Questionnaire } from '../src';
import Vue from 'vue/dist/vue.js';

describe('Questionnaire', () => {
    Vue.component('questionnaire', Questionnaire);

    beforeEach(() => {
        document.body.innerHTML = `
            <div id="app">
                <questionnaire></questionnaire>
            </div>
        `;
    });

    it('can mount', async () => {
        await createVm();

        expect(document.body.innerHTML).toMatchSnapshot();
    });
});

async function createVm() {
    const vm = new Vue({
        el: '#app',
    });

    await Vue.nextTick(() => {});

    return { app: vm, component: vm.$children[0] };
}
