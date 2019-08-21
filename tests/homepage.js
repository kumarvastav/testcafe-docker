import { Selector } from 'testcafe';

export default class Homepage {
    constructor() {
        this.username = Selector('#identifierId');
        this.next = Selector('#identifierNext');
    }
}