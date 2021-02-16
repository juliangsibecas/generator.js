import { RootFeatures } from '../types'
import { CustomGenerator } from '../utils/CustomGenerator'

export default class extends CustomGenerator {
  options: {
    features: RootFeatures
  }

  writing(): void {
    this.helpers.copyTpl(
      'index.ejs',
      'src/pages/api/index',
      this.options.features,
      { ext: true }
    )
  }
}
