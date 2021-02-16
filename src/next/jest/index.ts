import { RootFeatures } from '../types'
import { CustomGenerator } from '../utils/CustomGenerator'

export default class extends CustomGenerator {
  options: {
    features: RootFeatures
  }

  writing(): void {
    this.helpers.copy(['.babelrc', 'jest.config.js'])

    this.helpers.copyTpl(
      'index.test.ejs',
      'src/pages/index.test',
      this.options.features,
      { jsx: true }
    )
  }

  installing(): void {
    const tsDependencies = this.options.features.ts
      ? ['@types/jest', 'ts-jest']
      : []

    this.yarnInstall(
      [
        '@testing-library/jest-dom',
        '@testing-library/react',
        'babel-jest',
        'jest',
        'jest-dom',
        ...tsDependencies
      ],
      { dev: true }
    )
  }
}
