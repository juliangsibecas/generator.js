import fs from 'fs'

import Generator from 'yeoman-generator'

import { Helpers } from '../types'

export class CustomGenerator extends Generator {
  helpers: Helpers

  constructor(args: string | string[], opts: Generator.GeneratorOptions) {
    super(args, opts)

    this.helpers = {
      formatFeatures: (features: string[]) => {
        const obj: {
          [key: string]: boolean
        } = {}

        features.forEach((feature) => (obj[feature] = true))

        return obj
      },

      getFileExt: (ts: boolean, jsx: boolean) => {
        return jsx ? (ts ? 'tsx' : 'jsx') : ts ? 'ts' : 'js'
      },

      copy: (paths: string | string[]) => {
        if (Array.isArray(paths)) {
          paths.forEach((path) =>
            this.fs.copy(this.templatePath(path), this.destinationPath(path))
          )

          return
        }

        this.fs.copy(this.templatePath(paths), this.destinationPath(paths))
      },

      copyTpl: (
        from: string,
        dest: string,
        features: Record<string, boolean> = {},
        opts: Record<string, boolean> = {}
      ) => {
        if (!opts) opts = {}

        this.fs.copyTpl(
          this.templatePath(from),
          this.destinationPath(
            !opts.jsx && !opts.ext
              ? dest
              : `${dest}.${this.helpers.getFileExt(
                  Boolean(features.ts),
                  Boolean(opts.jsx)
                )}`
          ),
          features
        )
      },

      yarnInstallSync: (packages: string[]) => {
        return this.spawnCommandSync('yarn', ['add', ...packages])
      },

      extendsJSON: (filePath: string, json: Record<string, any>) => {
        const jsonStr = fs.readFileSync(this.destinationPath(filePath), 'utf-8')

        fs.writeFileSync(
          this.destinationPath('package.json'),
          JSON.stringify(
            {
              ...JSON.parse(jsonStr),
              ...json
            },
            null,
            2
          )
        )
      }
    }
  }
}
