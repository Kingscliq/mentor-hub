import moment from 'moment'

export const getDateTimeOnly = (val: string | number) =>
    `${moment(val).format('MMMM D YYYY')} ${moment(val).format('hh:mm a')}`;
    