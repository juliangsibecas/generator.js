import { RootFeatures } from '../types'
import { CustomGenerator } from '../utils/CustomGenerator'

export default class extends CustomGenerator {
  options: {
    features: RootFeatures
  }

  writing(): void {
    if (this.options.features.ts) {
      this.helpers.copyTpl('types/env.ejs', 'src/types/env.d.ts')
    }

    this.copyDestination(this.templatePath('.*'), this.destinationPath())
  }
}
