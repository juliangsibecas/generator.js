import { RootFeatures } from '../types'
import { CustomGenerator } from '../utils/CustomGenerator'

export default class extends CustomGenerator {
  options: {
    features: RootFeatures
  }

  writing(): void {
    this.helpers.copyTpl(
      'theme.ejs',
      'src/theme/index',
      this.options.features,
      { ext: true }
    )
  }

  installing(): void {
    this.yarnInstall([
      '@chakra-ui/react',
      '@chakra-ui/theme-tools',
      '@emotion/react',
      '@emotion/styled',
      'framer-motion'
    ])
  }
}
