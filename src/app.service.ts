import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { data, Report, ReportType } from 'src/data';

interface Body {
  amount: number;
  source: string;
}

@Injectable()
export class AppService {
  getAllReports(type: ReportType) {
    return data.report.filter((report) => report.type === type);
  }

  getReportById(type: ReportType, id: string) {
    return data.report
      .filter((report) => report.type === type)
      .find((report) => report.id === id);
  }

  createReport(type: ReportType, { amount, source }: Body) {
    const newReport: Report = {
      amount,
      created: new Date(),
      id: uuid(),
      source,
      type,
      updated: new Date(),
    };

    data.report.push(newReport);
    return newReport;
  }

  updateReport(type: ReportType, id: string, body: Body) {
    const reportToUpdate = data.report
      .filter((report) => report.type === type)
      .find((report) => report.id === id);

    if (!reportToUpdate) return;

    const reportIndex = data.report.findIndex(
      ({ id }) => id === reportToUpdate.id,
    );

    data.report[reportIndex] = {
      ...data.report[reportIndex],
      ...body,
      updated: new Date(),
    };

    return data.report[reportIndex];
  }

  deleteReport(id: string) {
    const reportIndex = data.report.findIndex((report) => report.id === id);

    if (reportIndex === -1) return;

    data.report.splice(reportIndex, 1);

    return;
  }
}
