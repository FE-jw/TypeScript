const a: number = 5;
const b: string = 'hello world';
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const f: any = 123123;	// 다 됨(타입스크립트를 쓸 이유가 없어지기 때문에 잘 안 씀)
const g: true = true;	// 무조건 true
const h: 'hello' = 'hello';	// 무조건 'hello'

// 매개변수 바로 뒤에 return 값 타입 지정
function add(x: number, y: number): number {
	return x + y;
}

// 화살표 함수인 경우 return의 타입은 => 다음에 적는다
const add1: (x: number, y: number) => number = (x, y) => x + y;

// interface 를 이용한 방법(심화 과정)
interface Add2	{
	(x: number, y: number): number;
}
const add2: Add2 = (x, y) => x + y;

const obj: {lat: number,lon: number} = {
	lat: 37.5,
	lon: 127.5
}

const arr1: string[] = ['123', '456'];
const arr2: number[] = [123, 456];
const arr3: Array<number> = [123, 456];	// 제네릭
const arr4: [number, number, string] = [123, 456, 'hello'];	// 튜플