export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export type Database = {
    public: {
        Tables: {
            profiles: {
                Row: {
                    id: string
                    full_name: string | null
                    role: 'user' | 'admin'
                    company_id: string | null
                    created_at: string
                }
                Insert: {
                    id: string
                    full_name?: string | null
                    role?: 'user' | 'admin'
                    company_id?: string | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    full_name?: string | null
                    role?: 'user' | 'admin'
                    company_id?: string | null
                    created_at?: string
                }
                Relationships: []
            }
            work_sessions: {
                Row: {
                    id: string
                    user_id: string
                    company_id: string | null
                    date: string
                    check_in: string | null
                    check_out: string | null
                    total_minutes: number
                    status: 'active' | 'paused' | 'completed'
                    created_at: string
                }
                Insert: {
                    id?: string
                    user_id: string
                    company_id?: string | null
                    date: string
                    check_in?: string | null
                    check_out?: string | null
                    total_minutes?: number
                    status: 'active' | 'paused' | 'completed'
                    created_at?: string
                }
                Update: {
                    id?: string
                    user_id?: string
                    company_id?: string | null
                    date?: string
                    check_in?: string | null
                    check_out?: string | null
                    total_minutes?: number
                    status?: 'active' | 'paused' | 'completed'
                    created_at?: string
                }
                Relationships: []
            }
            breaks: {
                Row: {
                    id: string
                    work_session_id: string
                    break_start: string
                    break_end: string | null
                    duration_minutes: number
                }
                Insert: {
                    id?: string
                    work_session_id: string
                    break_start: string
                    break_end?: string | null
                    duration_minutes?: number
                }
                Update: {
                    id?: string
                    work_session_id?: string
                    break_start?: string
                    break_end?: string | null
                    duration_minutes?: number
                }
                Relationships: []
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            [_ in never]: never
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
}
