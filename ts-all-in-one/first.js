// const a: number = 5;	//	타입 추론: 타입스크립트는 알아서 타입을 추론한다. 타입을 지워도 마우스를 올리면 타입이 지정되어 있다.
var a = 5;
var b = 'hello world';
var c = true;
var d = undefined;
var e = null;
var f = 123123; // 다 됨(타입스크립트를 쓸 이유가 없어지기 때문에 잘 안 씀)
var g = true; // 무조건 true
var h = 'hello'; // 무조건 'hello'
// 매개변수 바로 뒤에 return 값 타입 지정
function add(x, y) {
    return x + y;
}
// 화살표 함수인 경우 return의 타입은 => 다음에 적는다
var add1 = function (x, y) { return x + y; };
var add2 = function (x, y) { return x + y; };
var obj = {
    lat: 37.5,
    lon: 127.5
};
var arr1 = ['123', '456'];
var arr2 = [123, 456];
var arr3 = [123, 456]; // 제네릭
var arr4 = [123, 456, 'hello']; // 튜플
// const head = document.querySelector('#head');
var arr5 = [];
var arr6 = [];
function rest() {
    var agrs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        agrs[_i] = arguments[_i];
    }
    console.log(agrs);
}
rest('1', '2', '3'); // '1', '2', '3'
var tuple = ['1', 1];
// tuple[2] = 'hello'	// 에러
tuple.push('hello'); // 에러는 안 뜨지만 조심
var enum_1 = 0 /* EDirection.Up */;
var enum_2 = 2 /* EDirection.Left */;
