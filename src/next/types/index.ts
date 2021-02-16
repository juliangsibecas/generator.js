export type RootFeaturesUnion =
  | 'ts'
  | 'env'
  | 'jest'
  | 'api'
  | 'eslint'
  | 'chakra'

export type RootFeatures = {
  [K in RootFeaturesUnion]: boolean
}

export interface Helpers {
  formatFeatures: (features: string[]) => Record<string, boolean>
  getFileExt: (ts: boolean, jsx: boolean) => 'tsx' | 'jsx' | 'ts' | 'js'
  copy: (paths: string | string[]) => void
  copyTpl: (
    from: string,
    to: string,
    features?: Record<string, boolean>,
    opts?: Record<string, boolean>
  ) => void
  yarnInstallSync: (packages: string[]) => unknown
  extendsJSON: (filePath: string, json: Record<string, any>) => void
}

export interface PackageJson {
  scripts: {
    dev: string
    build: string
    start: string
    test?: string
  }
}
