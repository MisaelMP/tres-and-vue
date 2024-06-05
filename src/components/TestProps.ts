export interface DataTest {
  title: string
  cabeza: {
    pie: string
  }
}
export interface TestProps<T extends DataTest>{
  mgs?: String
  dataTest: T
}
