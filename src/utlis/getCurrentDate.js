export const getCurrentDate = () => {
  const currentDate = new Date();
  const monthNumber = (currentDate.getMonth()).toString();
  const day = currentDate.getDate().toString();
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const formattedDate = `${months[monthNumber]}-${day}`;

  return formattedDate;
}