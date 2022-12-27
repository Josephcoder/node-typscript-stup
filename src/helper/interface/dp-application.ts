export interface DPartnerApplication__Interface {
  id?: string;
  development_partner_id?: string;
  code?: string;
  country_code?: string;
  sub_area_id?: string;
  name: string;
  tin_number: string;
  website_link: string;
  phone: string;
  email: string;
  location: string;
  rgb_certificate_file_name: string;
  implementation_plan_file_name: string;
  organization_category_id: string;
  registration_date?: string;
  subareas: string[];
  status?: string;
  comment?: string;
}
export interface DPSubarea__Interface {
  id?: string;
  development_partner_id: string;
  sub_area_id: string;
  status?: string;
}
