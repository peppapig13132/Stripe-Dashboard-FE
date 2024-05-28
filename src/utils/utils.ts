import { format } from 'date-fns';

export const formatDateString = (dateString: string): string => {
  const date = new Date(dateString);
  return format(date, 'MMM dd, yyyy');
}