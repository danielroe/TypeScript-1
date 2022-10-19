1:: should re-emit only js so they dont contain sourcemap
*** Needs explanation
Incremental and clean size of maps do not match:: exportedModulesMap:: File:: /src/project/tsconfig.tsbuildinfo.readable.baseline.txt
Incremental: {
  "./c.ts": [
    "./a.ts"
  ],
  "./d.ts": [
    "./b.ts"
  ]
}
Clean: {}
4:: no-change-run
*** Needs explanation
Incremental and clean size of maps do not match:: exportedModulesMap:: File:: /src/project/tsconfig.tsbuildinfo.readable.baseline.txt
Incremental: {
  "./c.ts": [
    "./a.ts"
  ],
  "./d.ts": [
    "./b.ts"
  ]
}
Clean: {}
5:: local change
*** Needs explanation
Incremental and clean size of maps do not match:: exportedModulesMap:: File:: /src/project/tsconfig.tsbuildinfo.readable.baseline.txt
Incremental: {
  "./d.ts": [
    "./b.ts"
  ]
}
Clean: {}
7:: no-change-run
*** Needs explanation
Incremental and clean size of maps do not match:: exportedModulesMap:: File:: /src/project/tsconfig.tsbuildinfo.readable.baseline.txt
Incremental: {
  "./d.ts": [
    "./b.ts"
  ]
}
Clean: {}
10:: emit js files
*** Needs explanation
Incremental and clean size of maps do not match:: exportedModulesMap:: File:: /src/project/tsconfig.tsbuildinfo.readable.baseline.txt
Incremental: {
  "./d.ts": [
    "./b.ts"
  ]
}
Clean: {}