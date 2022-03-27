import crypto, { Hash } from 'crypto'

import { isProd } from '.'

const hash = (inlineScriptSource: string): Hash =>
  crypto.createHash('sha256').update(inlineScriptSource)

export const generateCsp = (inlineScriptSource: string): string =>
  (isProd()
    ? [
        `default-src 'self'`,
        `script-src 'self' 'sha256-${hash(inlineScriptSource).digest(
          'base64'
        )}'`,
      ]
    : [
        `default-src 'self'`,
        `style-src 'self' 'unsafe-inline'`,
        `font-src 'self' data:`,
        `script-src 'unsafe-eval' 'self' 'sha256-${hash(
          inlineScriptSource
        ).digest('base64')}'`,
      ]
  ).join(';')
