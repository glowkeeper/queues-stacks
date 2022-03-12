import { bst } from '../src/bst.mjs'

console.log( bst );

describe('adds', function() {
    it('correctly adds', function() {

        const tree = bst();
        tree.add(15)
        tree.add(10);
        tree.add(8);
        tree.add(4);
        tree.add(9);
        tree.add(12);
        tree.add(11);
        const myRoot = tree.getRoot();
        const myData = tree.search(myRoot, 15);
        //console.log('my stuff', myData);
        expect(myData.data).toEqual(15);
    })
})

describe('tree size', function() {
    it('correctly gets size', function() {

        const tree = bst();
        tree.add(15)
        tree.add(10);
        tree.add(8);
        tree.add(4);
        tree.add(9);
        tree.add(12);
        tree.add(11);
        const myRoot = tree.getRoot();
        const mySize = tree.getSize(myRoot);
        //console.log('my size', mySize);
        expect(mySize).toEqual(7);
    })
})

describe('ordered size', function() {
    it('correctly gets ordered tree', function() {

        const tree = bst();
        tree.add(15)
        tree.add(10);
        tree.add(8);
        tree.add(4);
        tree.add(9);
        tree.add(12);
        tree.add(11);
        const myRoot = tree.getRoot();
        const myArray = tree.getOrderedArray(myRoot);
        //const myPreArray = tree.getPreOrderedArray(myRoot);
        //const myPostArray = tree.getPostOrderedArray(myRoot);
        //console.log('my array', myArray);
        //console.log('my pre array', myPreArray);
        //console.log('my post array', myPostArray);
        expect(myArray).toEqual([4, 8, 9, 10, 11, 12, 15]);
    })
})
