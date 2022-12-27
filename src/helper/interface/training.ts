export interface MaterialLinks {
  title: string;
  description: string;
  url: string;
}

export interface TraineeCriterial {
  id: number;
  training_id: string;
  positions: any[];
  qualifications: any[];
  levels: any[];
  districts: any[];
  sectors: any[];
  strict: boolean;
}

export interface GroupItem {
  id: number;
  center_id: string;
  group_id: string;
  group_name: string;
  number_of_trainees: number;
  attendance: any;
  training_id: string;
}

export interface TrainingCenter {
  id: number;
  name: string;
  district_id: string;
  district_name: string;
  center_type_name: string;
  center_type_id: string;
  status: "ACTIVE" | "DISABLED";
}

export interface TrainingTrainers {
  id: string;
  training_id: string;
  user_id: string;
  training_to_group_id: string;
  status: "ACTIVE" | "DISABLED";
  nid: string;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  group_id: string;
}

export interface TrainingsItem {
  id: string;
  title: string | null;
  description: string | null;
  start_date: string | null;
  end_date: string | null;
  total: number | null;
  budget: number | null;
  evaluation_status: "PENDING" | "APPROVED" | "REJECTED";
  evaluated_date: string | null;
  evaluation_comment: string | null;
  implementation_status:
    | "INPROGRESS"
    | "COMPLETED"
    | "CANCELLED"
    | "DRAFT"
    | "READY_FOR_EVALUATION";
  created_by: string | null;
  created_date: string | null;
  updated_by: string | null;
  updated_at: string | null;
  sub_area_id: string | null;

  total_available_trainee?: number | null;
  total_trainees?: number | null;

  development_partner_id: string | null;
  evaluation_by?: string | null;
  topic_id: string | null;
  topic?: string | null;
  sub_area_name?: string | null;
  development_partner_name?: string | null;
  partner_type_name?: string | null;
  total_groups?: number | null;
  total_centers?: number | null;
  total_trainers?: number | null;
  intervention_area?: string | null;
  total_trainee_capacity?: number | null;
  trainer_institution?: string[] | null;
  trainee_category?: string[] | null;
  agenda_file_name?: string | null;
}

export interface TrainingInterface extends TrainingsItem {
  material_links?: MaterialLinks[] | null;
  trainee_criteria?: TraineeCriterial | null;
  groups?: GroupItem[] | null;
  centers?: TrainingCenter[] | null;
  trainers?: TrainingTrainers[] | null;
}
