export interface GroupsInfo {
  percent: number;
  studentTotal: number;
  title: string;
}

export type GroupInfoType = {
  title: string;
  percent: number;
  studentTotal: number;
};

export type Statuses = 'active' | 'inactive' | 'pending';
