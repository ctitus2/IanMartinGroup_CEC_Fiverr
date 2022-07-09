import { LightningElement } from 'lwc';

export default class LwcPortalSteps extends LightningElement {
    
    target1 = true;
    target2 = false;
    target3 = false;

    stepHandler(event) {
        console.log("id", event.currentTarget.dataset.id);

        this.template.querySelector('.current').classList.remove('current');
        this.template.querySelector(`[data-id="${event.currentTarget.dataset.id}"]`).classList.add('current');

        this.target1 = false;
        this.target2 = false;
        this.target3 = false;

        if(event.currentTarget.dataset.id==1) {
            this.target1 = true;
        }
        if(event.currentTarget.dataset.id==2) {
            this.target2 = true;
        }
        if(event.currentTarget.dataset.id==3) {
            this.target3 = true;
        }

    }

}