import { render, screen } from '@testing-library/react';
import App from './App';


//------------------------------------
function myForEach(items,callback)
{
    for(let index=0;index<items.length;index++)
    {
        console.log("items["+index+"]: "+ items[index]);
        callback(items[index]);
    }
}

//---------------------------------------

const sum=require("./sum");
var a;
//---------------------------set up-----------------------
beforeAll(()=>{
    a=3;
    console.log("before all is executed before the excecution of  all test cases");
});

//---------------------clean up------------------------------
afterAll(()=>{
    a=0
    console.log("after  all is executed after the excecution of  all test cases");
});

//---------------------------before each----------------------
beforeEach(()=>{
     console.log("before each is executed before the excecution of  each test cases");
});

//---------------------------after each----------------------
afterEach(()=>{
    console.log("after each is executed after the excecution of  each test cases");
});
console.log("-----------------Test Sum Function-----------");
test("This test is for testing 3+2 equals 5 Or Not",
()=>{
    expect(sum(3,2)).toBe(5);//actual testing with expected
})

test("This test is for testing 0+0 equals 0 Or Not",
()=>{
    expect(sum(0,0)).toBe(0);//actual testing with expected
})
console.log("-----------------Suite----------");

describe(" This Suite is for Question Component",()=>{
    //--------------------------------------
          it("test 5+5 shuld 10",()=>{
             expect(5+5).toBe(10);
          })
    //--------------------------------------------
        it.skip("test 5*3 shuld 15",()=>{
        expect(5*3).toBe(15);
     })
      //--------------------------------------------
       it("test 4*4 shuld 16",()=>{
        expect(4*4).toEqual(16);
     })

});

//-----------------------------Suite2-------------------
describe(" This is Suite 2 for mocking",
()=>{

    //---------------------------------------
        it(" test Mock1 ",()=>{

         const mockCallback=
         jest.fn((x)=>{
             return (42+x)
         })
         myForEach([0,1],mockCallback);
         //the mock function is called twiice
         expect(mockCallback.mock.calls.length ).toBe(2);

         //the first argument of the second call to the function si 0 or not
         expect(mockCallback.mock.calls[0][0]).toBe(0);
         //test the return value for first call to the function is 42 or not

         expect(mockCallback.mock.results[0].value).toBe(42)

        });
});
