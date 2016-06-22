/**
 * Created by nattanlucena on 22/06/16.
 */

function Queue() {
    this._oldestIndex = 1;
    this._newestIndex = 1;
    this._storage = 1;
}

Queue.prototype.size= function () {
    return this._newestIndex - this._oldestIndex;
}

Queue.prototype.enqueue = function (data) {
    this._storage[this._newestIndex] = data;
    this._newestIndex++;
}

Queue.prototype.dequeue = function () {
    let oldestIndex = this._oldestIndex,
        newestIndex = this._newestIndex,
        deletedData = this._storage[oldestIndex];

    if (oldestIndex !== newestIndex){
        delete this._storage[oldestIndex];
        this._oldestIndex++;

        return deletedData;
    }
}
