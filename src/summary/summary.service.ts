import { Injectable } from '@nestjs/common';
import { ReportType } from 'src/data';
import { ReportService } from 'src/report/report.service';

@Injectable()
export class SummaryService {
  constructor(private readonly reportService: ReportService) {}

  calculateSummary() {
    const totalExpense = this.reportService
      .getAllReports(ReportType.expense)
      .reduce((sum, { amount }) => sum + amount, 0);

    const totalIncome = this.reportService
      .getAllReports(ReportType.income)
      .reduce((sum, { amount }) => sum + amount, 0);

    return { totalIncome, totalExpense, netIncome: totalIncome - totalExpense };
  }
}
