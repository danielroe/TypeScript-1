0:: error and enable declarationMap
*** Needs explanation
TsBuild info text without affectedFilesPendingEmit:: /src/project/tsconfig.tsbuildinfo.readable.baseline.txt::
CleanBuild:
{
  "program": {
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./a.ts": {
        "version": "5515933561-const x: 20 = 10;",
        "affectsGlobalScope": true
      },
      "./b.ts": {
        "version": "2026006654-const y = 10;",
        "affectsGlobalScope": true
      }
    },
    "options": {
      "composite": true,
      "declaration": true,
      "declarationMap": true,
      "noEmitOnError": true
    },
    "referencedMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      [
        "./a.ts",
        [
          {
            "file": "./a.ts",
            "start": 6,
            "length": 1,
            "code": 2322,
            "category": 1,
            "messageText": "Type '10' is not assignable to type '20'."
          }
        ]
      ],
      "./b.ts"
    ],
    "emitSignatures": [
      "./a.ts",
      "./b.ts"
    ]
  },
  "version": "FakeTSVersion"
}
IncrementalBuild:
{
  "program": {
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./a.ts": {
        "version": "5515933561-const x: 20 = 10;",
        "affectsGlobalScope": true
      },
      "./b.ts": {
        "version": "2026006654-const y = 10;",
        "affectsGlobalScope": true
      }
    },
    "options": {
      "composite": true,
      "declaration": true,
      "declarationMap": true,
      "noEmitOnError": true
    },
    "referencedMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      [
        "./a.ts",
        [
          {
            "file": "./a.ts",
            "start": 6,
            "length": 1,
            "code": 2322,
            "category": 1,
            "messageText": "Type '10' is not assignable to type '20'."
          }
        ]
      ],
      "./b.ts"
    ],
    "emitSignatures": [
      [
        "./a.ts",
        "-3198459068-declare const x = 10;\r\n"
      ]
    ],
    "latestChangedDtsFile": "FakeFileName"
  },
  "version": "FakeTSVersion"
}
Incremental build contains ../../lib/lib.d.ts file as pending emit, clean build does not have it: /src/project/tsconfig.tsbuildinfo.readable.baseline.txt::
Incremental buildInfoText:: {
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./a.ts",
      "./b.ts"
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./a.ts": {
        "version": "5515933561-const x: 20 = 10;",
        "signature": "-1601647902-declare const x: 20;\r\n",
        "affectsGlobalScope": true
      },
      "./b.ts": {
        "version": "2026006654-const y = 10;",
        "signature": "-5539113915-declare const y = 10;\r\n",
        "affectsGlobalScope": true
      }
    },
    "options": {
      "composite": true,
      "declaration": true,
      "declarationMap": true,
      "noEmitOnError": true
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      [
        "./a.ts",
        [
          {
            "file": "./a.ts",
            "start": 6,
            "length": 1,
            "code": 2322,
            "category": 1,
            "messageText": "Type '10' is not assignable to type '20'."
          }
        ]
      ],
      "./b.ts"
    ],
    "affectedFilesPendingEmit": [
      [
        "../../lib/lib.d.ts",
        "Full"
      ],
      [
        "./a.ts",
        "Full"
      ],
      [
        "./b.ts",
        "Full"
      ]
    ],
    "emitSignatures": [
      [
        "./a.ts",
        "-3198459068-declare const x = 10;\r\n"
      ]
    ],
    "latestChangedDtsFile": "./b.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1251
}
Clean buildInfoText:: {
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./a.ts",
      "./b.ts"
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./a.ts": {
        "version": "5515933561-const x: 20 = 10;",
        "signature": "-1601647902-declare const x: 20;\r\n",
        "affectsGlobalScope": true
      },
      "./b.ts": {
        "version": "2026006654-const y = 10;",
        "signature": "-5539113915-declare const y = 10;\r\n",
        "affectsGlobalScope": true
      }
    },
    "options": {
      "composite": true,
      "declaration": true,
      "declarationMap": true,
      "noEmitOnError": true
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      [
        "./a.ts",
        [
          {
            "file": "./a.ts",
            "start": 6,
            "length": 1,
            "code": 2322,
            "category": 1,
            "messageText": "Type '10' is not assignable to type '20'."
          }
        ]
      ],
      "./b.ts"
    ],
    "affectedFilesPendingEmit": [
      [
        "./a.ts",
        "Full"
      ],
      [
        "./b.ts",
        "Full"
      ]
    ],
    "emitSignatures": [
      "./a.ts",
      "./b.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 1175
}
1:: fix error declarationMap
*** Needs explanation
File: /src/project/a.d.ts
CleanBuild:
declare const x = 10;
//# sourceMappingURL=a.d.ts.map
IncrementalBuild:
declare const x = 10;

File: /src/project/b.d.ts
CleanBuild:
declare const y = 10;
//# sourceMappingURL=b.d.ts.map
IncrementalBuild:
declare const y = 10;
