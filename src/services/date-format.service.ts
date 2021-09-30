// import { DateTime } from 'luxon';

class DateFormatService {
  // public getMoment = (date: string | number | Date): Moment => {
  //   const tz = moment.tz.guess();
  //   const { timeZoneName } = DateTime.DATETIME_FULL;
  //   if (_.isNumber(date)) {
  //     return moment.unix(date).tz(tz);
  //   }
  //   return moment(date).tz(tz);
  // };
  // public formatDate = (date: number | string | Date): string => {
  //   const dateMoment = this.getMoment(date);
  //   return dateMoment.isValid() ? dateMoment.format('DD.MM.YYYY') : '-';
  // };
  // public formatDateTime = (
  //   date: number | string | Date,
  //   format = 'DD.MM.YYYY HH:mm'
  // ): string => {
  //   const dateMoment = this.getMoment(date);
  //   return dateMoment.isValid() ? dateMoment.format(format) : '-';
  // };
}

export default new DateFormatService();
