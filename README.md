# **TypeScript**

* [인프런 ZeroCho ts-all-in-one](https://github.com/ZeroCho/ts-all-in-one#readme)
* [typescript 공식문서](https://www.typescriptlang.org/)
* [typescript 플레이그라운드](https://www.typescriptlang.org/play)
* [typescript 핸드북 필독](https://www.typescriptlang.org/docs/handbook/intro.html)
* [typescript 버전 수정 내역](https://www.typescriptlang.org/docs/handbook/release-notes/overview.html)

## **설치하기**
* 노드 프로젝트 시작
	```
	npm init -y
	```

* 타입스크립트 설치
	```
	npm init typescript
	```

* tsc 실행
	```
	npx tsc
	```

* tsconfig.json 생성
	```
	npx tsc --init
	```

## **기능 살펴보기**
* 타입 검사(에디터 사용 시 불필요)  
	타입 검사와 컴파일은 변개의 기능히다. 타입 에러가 있어도 컴파일은 가능하다.
	```
	npx tsc --noEmit
	```

* JS로 컴파일
	```
	npx tsc
	```


























<!-- 
## 프로젝트 이용자라면 모듈 설치부터
```
npm install
```

### 타입스크립트 프로젝트 만들기
1. typescript와 ts-node 설치
	```
	npm i -D typescript ts-node
	```

2. 모듈 초기화(해당 폴더로 이동 후)
	```
	npm init
	```

3. 폴더 생성
	```
	mkdir src/utils
	```

4. package.json 수정
	```
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1",
		"dev": "ts-node src",
		"build": "tsc && node dist"
	}
	```

5. tsconfig.json 설정
	```
	npx tsc --init
	```
	```json
	{
		"compilerOptions": {
			"target": "es5",
			"module": "commonjs",
			"moduleResolution": "node",
			"baseUrl": ".",
			"paths": {"*": ["node_modules/*"]},
			"sourceMap": true,
			"outDir": "dist",
			"downlevelIteration": true,
			"esModuleInterop": true,
			"forceConsistentCasingInFileNames": true,
			"strict": true,
			"noImplicitAny": false,
			"skipLibCheck": true
		},
		"include": ["src/**/*"]
	}
	```
-->