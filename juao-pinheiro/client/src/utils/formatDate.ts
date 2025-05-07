export function formatDate(dateString: string): string {
    const [fullDate, _time] = dateString.split('T');
    const [year, month, day] = fullDate.split('-');
    
    return `${day}/${month}/${year}`;
  }
  