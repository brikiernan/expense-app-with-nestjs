import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
} from '@nestjs/common';

import { ReportType } from 'src/data';
import { AppService } from 'src/app.service';

@Controller('report/:type')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllReports(@Param('type') type: string) {
    const income = type === 'income';
    const reportType = income ? ReportType.income : ReportType.expense;

    return this.appService.getAllReports(reportType);
  }

  @Get(':id')
  getReportById(@Param('type') type: string, @Param('id') id: string) {
    const income = type === 'income';
    const reportType = income ? ReportType.income : ReportType.expense;
    return this.appService.getReportById(reportType, id);
  }

  @Post()
  createReport(
    @Body() body: { amount: number; source: string },
    @Param('type') type: string,
  ) {
    const income = type === 'income';
    const reportType = income ? ReportType.income : ReportType.expense;
    return this.appService.createReport(reportType, body);
  }

  @Put(':id')
  updateReport(
    @Param('type') type: string,
    @Param('id') id: string,
    @Body() body: { amount: number; source: string },
  ) {
    const income = type === 'income';
    const reportType = income ? ReportType.income : ReportType.expense;
    return this.appService.updateReport(reportType, id, body);
  }

  @HttpCode(204)
  @Delete(':id')
  deleteReport(@Param('id') id: string) {
    return this.appService.deleteReport(id);
  }
}
