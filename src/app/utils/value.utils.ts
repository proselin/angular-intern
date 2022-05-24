
export class ValueUtils {
  static jsonToString(item: any):string {
    return JSON.stringify(item)
  }

  static stringToJson(item: string){
    return JSON.parse(item)
  }

}
