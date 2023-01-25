# TypeScript

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