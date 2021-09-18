import fs from 'fs'
import cherrio from 'cheerio'
import { Analyzer } from './crawler'

class LeeAnalyzer implements Analyzer {

  public analyze(html: string, filePath: string) {
    return html
  }
}

export default LeeAnalyzer
