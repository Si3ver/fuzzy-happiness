import fs from 'fs'
import cherrio from 'cheerio'
import { Analyzer } from './crawler'

interface Course {
  name: string
  count: number
}

interface CourseResult {
  time: number
  data: Course[]
}

interface Content {
  [propName: number]: Course[]
}

class DellAnalyzer implements Analyzer {

  private static instance: DellAnalyzer

  static getInstance() {
    if (!DellAnalyzer.instance) {
      DellAnalyzer.instance = new DellAnalyzer()
    }
    return DellAnalyzer.instance
  }

  private getCourseInfo(html: string) {
    const $ = cherrio.load(html)
    const courseItems = $('.course-item')
    const courseInfos: Course[] = []
    courseItems.map((index, element) => {
      const descs = $(element).find('.course-desc')
      const title = descs.eq(0).text()
      const count = parseInt(descs.eq(1)?.text().split('：')?.[1])
      courseInfos.push({
        name: title,
        count: count
      })
    })
    const result = {
      time: new Date().getTime(),
      data: courseInfos
    }
    return result
  }

  private generateJsonContent(courseInfo: CourseResult, filePath: string) {
    let fileContent: Content = {}
    if (fs.existsSync(filePath)) {
      fileContent = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    }
    fileContent[courseInfo.time] = courseInfo.data
    return fileContent
  }

  public analyze(html: string, filePath: string) {
    const courseInfo = this.getCourseInfo(html)
    const fileContent = this.generateJsonContent(courseInfo, filePath)
    return JSON.stringify(fileContent, null, 2)
  }

  private constructor() {}
}

export default DellAnalyzer
