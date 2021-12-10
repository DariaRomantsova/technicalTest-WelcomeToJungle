
export type LooseObject = {
  [key: string]: any;
};

export type Office = {
  address: string;
  city: string;
  country: LooseObject;
  district: string;
  id: number;
  name: string;
  zip_code: string;
};

export type Department = {
  id: number;
  name: string;
};

export type WebsiteReference = {
  url: string;
  website_reference: string;
};

export type Locales = {
  fr: string;
  en: string;
  es?: string;
  cs?: string;
  sk?: string;
};

export type Salary = {
  min: number | null;
  max: number | null;
  currency: string;
  period: string;
};

export type JobId = number;

export type Job = {
  id: JobId;
  name: string;
  profile: string;
  description: string;
  cms_sites_references: string[];
  contract_type: Locales;
  created_at: Locales;
  department: Department;
  office: Office;
  published_at: string;
  recruitment_process: string;
  reference: string;
  salary: Salary;
  slug: string;
  websites_urls: WebsiteReference[]
};

export type GroupTypes = 'none' | 'department.name' | 'office.name'

export type FormInputs = {
  name: string;
  groupBy: GroupTypes;
};

export type JobCollection = {
  [key: string]: Job[]
};