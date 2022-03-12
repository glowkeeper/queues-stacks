import { bst } from '../src/bst.mjs'

console.log( bst );

describe('add', function() {
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
        const myArray = tree.getOrderedArray(myRoot);
        //console.log('my added array', myArray);
        expect(myArray).toEqual([4, 8, 9, 10, 11, 12, 15]);
    })
})

describe('remove', function() {
    it('correctly removes', function() {

        const tree = bst();
        tree.add(15)
        tree.add(10);
        tree.add(8);
        tree.add(4);
        tree.add(9);
        tree.add(12);
        tree.add(11);
        tree.remove(9)
        const myRoot = tree.getRoot();
        const myArray = tree.getOrderedArray(myRoot);
        //console.log('my removed array', myArray);
        expect(myArray).toEqual([4, 8, 10, 11, 12, 15]);
    })
})

describe('search', function() {
    it('correctly finds', function() {

        const tree = bst();
        tree.add(15)
        tree.add(10);
        tree.add(8);
        tree.add(4);
        tree.add(9);
        tree.add(12);
        tree.add(11);
        const myRoot = tree.getRoot();
        const mySearch = tree.search(myRoot, 8);
        expect(mySearch?.data).toEqual(8);
    })
})

describe('size', function() {
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

describe('ordered', function() {
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
