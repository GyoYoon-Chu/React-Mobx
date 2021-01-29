import { observable, action, computed, makeObservable, toJS } from 'mobx';

class TodoStore {

    constructor() {
        makeObservable(this);
    }

    @observable
    _todo = {}
    @observable
    _todos = [{ title: '1', date: '1' }, { title: '2', date: '2' }, { title: '3', date: '3' }];
    @observable
    _searchText = '';

    @computed
    get searchText() {
        return this._searchText;
    }

    @computed
    get todo() {
        return this._todo;
    }
    //computed를 사용하는 이유?!
    //->>옵저버블데이터간의 연산이 일어날 때 사용!!!
    @computed
    get todos() {
        // return this._todos ? this._todo.slice() : []; 
        //원래 그냥 todos를 반환하면 몹엑스가 저 todos를 observableArrayAdministration? 같은 이상한 타입으로 감싸서 관리하게 되는데 뭐 별 이상은 없는데 우리가 개발자도구에서 시각적으로 확 안 옴. 그래서 위에 처럼 하면 todos가 javascript배열 타입으로 반환해줌 근데 문제는 또 이게 한번만 이렇게 되지 그 다음 또 add할 때는 다시 또 몹엑스가 관리하는 타입으로 반환됨. 그래서 toJS쓰면 됨
        return toJS(this._todos);
    }
    @action
    setTodoProps(name, value) {
        this._todo = {
            ...this._todo,
            [name]: value
        }
    }
    @action
    addTodo(todo) {
        this._todos.push(todo);
        this._todo = {};
    }
    @action
    selectedTodo(todo) {
        this._todo = todo;
    }
    @action
    updateTodo() {
        let foundTodo = this._todos.find((todo) => todo.id === this._todo.id);
        foundTodo.title = this._todo.title;
        foundTodo.date = this._todo.date;

        this._todo = {};
    }
    @action
    removeTodo() {
        let index = this._todos.findIndex(todo => todo.id === this._todo.id);
        if (index > -1) {
            this._todos.splice(index, 1);
        }
        this._todo = {};
    }

    @action
    searchTodo(searchText) {
        this._searchText = searchText;
    }

}

export default new TodoStore();