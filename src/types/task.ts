export default interface Task {
  id: string
  title: string
  description?: string
  board_id: string
  created_by?: string
  created_at?: string
  updated_at?: string
}
