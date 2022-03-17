export interface Report {
  id: string;
  source: string;
  amount: number;
  created_at: Date;
  updated_at: Date;
  type: ReportType;
}

interface Data {
  report: Report[];
}

export enum ReportType {
  expense = 'expense',
  income = 'income',
}

export const data: Data = {
  report: [
    {
      amount: 7500,
      created_at: new Date(),
      id: 'uuid1',
      source: 'Salary',
      type: ReportType.income,
      updated_at: new Date(),
    },
    {
      amount: 2500,
      created_at: new Date(),
      id: 'uuid2',
      source: 'YouTube',
      type: ReportType.income,
      updated_at: new Date(),
    },
    {
      amount: 500,
      created_at: new Date(),
      id: 'uuid3',
      source: 'Food',
      type: ReportType.expense,
      updated_at: new Date(),
    },
  ],
};
