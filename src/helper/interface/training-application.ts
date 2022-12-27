export interface TrainingApplication__Interface {
  id: string;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  agenda_file_name: string;
  sub_area_id: string;
  topic_id: string;
  material_links: string;
  total: string;
  budget: string;
  development_partner_id: string;
}
export interface TrainingCriteria__Interface {
  id: string;
  training_id: string;
  positions: string;
  qualifications: string;
  levels: string;
  education_certificate: string;
  districts: string;
  sectors: string;
  subjects: string;
  strict: string;
}
export interface TraineeRequest__Interface {
  id: string;
  training_id: string;
  school_id: string;
  district_id: string;
  sector_id: string;
  institution_id: string;
  total: string;
  group_id: string;
}

export interface Criteria__Interface {
  positions: { id: string; name: string }[];
  qualifications: { id: string; name: string }[];
  levels: { id: string; name: string }[];
  districts: { id: string; name: string }[];
  sectors: { id: string; name: string }[];
  education_certificate: { id: string; name: string }[];
  subjects: {
    level_code: string;
    level_name: string;
    course_code: string;
    course_name: string;
  }[];
  strict: boolean;
}
