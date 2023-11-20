export const getCurrentDate = () => {
  const currentDate = new Date();
  const monthNumber = (currentDate.getMonth()).toString().padStart(2, '0');
  const day = currentDate.getDate().toString().padStart(2, '0');
  const hours = currentDate.getHours().toString().padStart(2, '0');
  const minutes = currentDate.getMinutes().toString().padStart(2, '0');
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  const formattedDate = `${months[monthNumber]}-${day}, ${hours}:${minutes}`;

  return formattedDate;
};
