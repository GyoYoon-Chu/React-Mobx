import { observable, action, makeObservable } from 'mobx';

class CounterStore {
    constructor() {
        makeObservable(this);
    } //새로운 몹엑스 버전 6에서 추가된 부분!!

    @observable
    _count = 5;

    get count() {
        return this._count;
    }
    @action
    increment() {
        this._count++;
    }
    @action
    decrement() {
        this._count--;
    }


}

export default new CounterStore();