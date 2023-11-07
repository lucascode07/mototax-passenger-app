import { Pilot } from "./pilot.model";

export interface PilotResponse {
  data: PilotResponseData[];
  meta: Meta;
}

export interface PilotResponseData {
  id: number;
  attributes: Pilot;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
