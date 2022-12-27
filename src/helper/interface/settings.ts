export interface TrainingSetting__Interface {
  id?: number;
  intervention_area_id?: string;
  name: string;
  roles?: string[];
  description?: string;
  is_mandatory?: boolean;
  tags: string[];
  status?: string;
  intervention_area?: string;
}

export interface CenterSetting__Interface {
  id?: number;
  name: string;
  center_type_id?: string;
  district_id: string;
}
