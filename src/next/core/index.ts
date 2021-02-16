import { PackageJson, RootFeatures } from '../types'
import { CustomGenerator } from '../utils/CustomGenerator'

export default class extends CustomGenerator {
  options: {
    features: RootFeatures
  }

  async initializing(): Promise<void> {
    await this.spawnCommandSync('yarn', ['init', '-y'])
  }

  async writing(): Promise<void> {
    this.helpers.copyTpl(
      'pages/app.ejs',
      'src/pages/_app',
      this.options.features,
      { jsx: true }
    )

    this.helpers.copyTpl(
      'pages/index.ejs',
      'src/pages/index',
      this.options.features,
      { jsx: true }
    )
  }

  install(): void {
    const tsDependencies = this.options.features.ts
      ? ['typescript', '@types/node', '@types/react', '@types/react-dom']
      : []

    this.yarnInstall([...tsDependencies, 'next', 'react', 'react-dom'])
  }

  end(): void {
    const pkg: PackageJson = {
      scripts: {
        dev: 'next dev',
        build: 'next build',
        start: 'next start'
      }
    }

    if (this.options.features.jest) {
      pkg.scripts.test = 'jest'
    }

    this.helpers.extendsJSON('package.json', pkg)
  }
}
