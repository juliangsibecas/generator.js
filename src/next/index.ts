import Generator from 'yeoman-generator'

import { CustomGenerator } from './utils/CustomGenerator'
import { Helpers, RootFeatures } from './types'

interface ExtendedHelpers extends Helpers {
  features: RootFeatures
}

export default class extends CustomGenerator {
  helpers: ExtendedHelpers

  constructor(args: string | string[], opts: Generator.GeneratorOptions) {
    super(args, opts)

    this.helpers.features = {
      ts: false,
      jest: false,
      eslint: false,
      env: false,
      api: false,
      chakra: false
    }
  }

  async prompting(): Promise<void> {
    const answers = await this.prompt([
      {
        type: 'checkbox',
        name: 'features',
        message: 'What features do you want?',
        choices: [
          {
            name: 'ts',
            checked: true
          },
          {
            name: 'eslint',
            checked: true
          },
          {
            name: 'jest',
            checked: true
          },
          {
            name: 'env',
            checked: true
          },
          {
            name: 'chakra',
            checked: true
          },
          {
            name: 'api',
            checked: false
          }
        ]
      }
    ])

    this.helpers.features = {
      ...this.helpers.features,
      ...this.helpers.formatFeatures(answers.features)
    }

    this.composeWith(require.resolve('./core'), {
      features: this.helpers.features
    })

    if (this.helpers.features.ts) {
      this.composeWith(require.resolve('./ts'))
    }

    if (this.helpers.features.eslint) {
      this.composeWith(require.resolve('./eslint'), {
        features: this.helpers.features
      })
    }

    if (this.helpers.features.jest) {
      this.composeWith(require.resolve('./jest'), {
        features: this.helpers.features
      })
    }

    if (this.helpers.features.env) {
      this.composeWith(require.resolve('./env'), {
        features: this.helpers.features
      })
    }

    if (this.helpers.features.chakra) {
      this.composeWith(require.resolve('./chakra'), {
        features: this.helpers.features
      })
    }

    if (this.helpers.features.api) {
      this.composeWith(require.resolve('./api'), {
        features: this.helpers.features
      })
    }
  }
}
