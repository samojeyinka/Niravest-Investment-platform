const FormatDate = (dateString) => {
    try {
      const options = { month: 'long', day: 'numeric', year: 'numeric'};
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        return 'Invalid Date';
      }
      return new Intl.DateTimeFormat('en-US', options).format(date);
    } catch (error) {
      console.error(error);
      return 'Error formatting date';
    }
  };
  
  export default FormatDate;