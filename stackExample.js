/**
 * Created by nattanlucena on 22/06/16.
 */

function Stack() {
    this._size = 0;
    this._storage = {};
}

Stack.prototype.push = function (data) {
    let size = this._size++;
    this._storage[size] = data;
}

Stack.prototype.pop = function () {
    let size = this._size,
        deletedData;

    if (size) {
        delete this._storage[size];
        this._size--;
        return deletedData;
    }
}